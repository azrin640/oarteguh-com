import { AfterViewInit, Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatSnackBar, MatTableDataSource, MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { SerialAuthService } from 'src/app/services/serial-no/serial-auth.service';
import { Serial } from 'src/app/interface/serial';

export interface Datas{ key: string, value: Boolean};
export interface Data{ key: any, value: any };
export interface ToDelete{ string: Boolean };
export interface MbData{ length: number, delete: boolean };

@Component({
  selector: 'app-admin-serial-table',
  templateUrl: './admin-serial-table.component.html',
  styleUrls: ['./admin-serial-table.component.scss']
})
export class AdminSerialTableComponent implements AfterViewInit, OnInit {

   
   deleteColor: string = 'primary';
   filterColor: string = 'primary';
   selectAllColor: string = 'primary';

   // Checkbox settings
   checked = false;
   indeterminate = false;
   labelPosition = 'after';
   disabled = false;

   dataSource = new MatTableDataSource<Serial>();
   editMode: boolean = false;
   filter: boolean = false;
   displayedColumns = ['serial', 'market', 'delete'];
   serials: Serial[] = [];
   toDeleteData: Serial = {};
   toDeleteList: ToDelete[] = [];
   datasToDelete: Serial[] = [];
   length: number = 0;
   deletedInDb;
   index: number[] = [];

   @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: false}) sort: MatSort;
   constructor(
     private serialService: SerialAuthService,
     public snackBar: MatSnackBar,
     public bottomSheet: MatBottomSheet
   ){ 
      this.dataTableUpdate();   
   }

   ngOnInit() {}

   ngAfterViewInit() 
   {     this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;  }  //

   dataTableUpdate()
   {  this.serialService.serials.subscribe(
         (response: Serial[]) => this.dataSource.data = response,
         error => this.snackBar.open(`There is a problem getting data from the server. Error: ${error}`, 'X', {duration: 10000, panelClass: 'red-theme'})   )} //   

   selectAction()
   {
      this.editMode ? 
            (this.editMode = false, this.displayedColumns = ['serial', 'market', 'delete'], this.deleteColor = 'primary') : 
            (this.editMode = true, this.displayedColumns = ['check', 'serial', 'market', 'delete'], this.deleteColor = 'accent' ); 
   }

   filterAction()
   {
         this.filter ? (this.filter = false, this.filterColor = 'primary') : (this.filter = true, this.filterColor = 'accent');
   }

   filterTable(filterValue: string)
   {  
      this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   deleteASerialNo(serial)
   {
      this.length = 1;
      this.toDeleteData = serial;

      // Open bottom sheet for user confirmation
      this.openBottomSheet();
   }

   selectAll()
   {
      this.checked ? (this.checked = false, this.selectAllColor = 'primary') : (this.checked = true, this.selectAllColor = 'accent');
   }

   onSubmit(datas: Datas)
   {   
      if(datas){
         /* Convert objects from ngFor checkbox to array, objects example: { {"abc100": true}, {"abc101" false}, {"abc102": false}, ...}, to {{"abc100": true}, undefined, undefined, ...} then convert it with map to [{id: "abc100"}, undefined, undefined, ...] */   
         let datasToDelete = Object.keys(datas).map((key) => {
            if(datas[key]) return { id: key };
            else return;
         })
         // Further chain it to reduce method with array initializer to rebuild the array and exclude undefined data  
         .reduce((acc, val) => {
            if(val) acc.push(val);
            return acc;
         }, []);
         this.datasToDelete = datasToDelete;
         this.length = datasToDelete.length; 
         this.openBottomSheet()
      }
      else return;
   } 

   openBottomSheet()
   {
         var bottomSheetRef;
         let length = this.length;

         // Test and open bottomSheet and send data
         let data = { length, delete: false };
      
         if(length >= 1){
            let openBottomSheet = this.bottomSheet.open(BottomSheetConfirm, { data: data, panelClass: 'red-theme' });
            bottomSheetRef = openBottomSheet;
         } 

         // If the user confirm deletion, deleteManyReq function to delete from db
         bottomSheetRef.afterDismissed().subscribe(( confirm ) => {
            
            if(confirm && confirm.delete && length == 1){
               // delete in db
               this.deleteASerialNoInDb();
            }
            
            else if(confirm && confirm.delete && length > 1){
               // delete in db
               this.deleteManyReqInDb();
            }
         });
   }

   deleteASerialNoInDb()
   {  let serial = this.toDeleteData;
      this.serialService.deleteASerialNo(serial).subscribe(
         (response: any) => {
            if(response && response.id){
               let currDatas = this.dataSource.data;
               let index = currDatas.findIndex((serial) => serial.id == response.id);
               currDatas.splice(index, 1);
               this.dataSource.data = currDatas;
               this.snackBar.open('Serial number is successfully deleted from database.', 'X', {duration: 10000, panelClass: 'gold-theme'});    }  // 
            else this.snackBar.open('Error deleting serial number from database. Please reload page and try again', 'X', {duration: 10000, panelClass: 'red-theme'})    }, //
         error => this.snackBar.open('Error deleting serial number from database. Error: ' + error, 'X', {duration: 10000, panelClass: 'red-theme'})  ); }  //  

   deleteManyReqInDb(): void
   {  this.serialService.deleteSerialNos(this.datasToDelete).subscribe(
            (response: any) => {    
               if(response.ok == 1) this.deleteFromDataSource();
               else this.snackBar.open(`Error deleting file from the server. Please try again`, 'X', {duration: 10000, panelClass: 'red-theme'});
            },
            error => {
               this.snackBar.open(`Error deleting file from the server. Error: ${error}`, 'X', {duration: 10000, panelClass: 'red-theme'});
               this.deletedInDb = false;     })}   //

   deleteFromDataSource(): void
   {  let currData = this.dataSource.data;      
      let datasToDelete = this.datasToDelete;

      let dataSource = datasToDelete.reduce((acc, val): Serial[] => {
         if(val) {
            let index = currData.findIndex((serial) => serial.id === val.id);
            currData.splice(index, 1);            
         }  
         acc = currData;      
         return acc;
      }, []);
      this.dataSource.data = dataSource;
      this.selectAction;
      this.checked = false;
      this.snackBar.open('Serial numbers are successfully deleted from database.', 'X', {duration: 10000, panelClass: 'gold-theme'});  }}    //


@Component({
   selector: 'bottom-sheet-confirm',
   styleUrls: ['./admin-serial-table.component.scss'],
   template: `
                  <div fxLayout="column" fxLayoutAlign="center center" >
                        <mat-card-title class="card__title">Confirm Delete</mat-card-title>
                        <mat-card-content>

                           <div class="mb__warning" fxLayout="column" fxLayoutAlign="center center">
                              Are you sure you want to delete these serial numbers?

                              <h2>{{ dataLength }} serial numbers</h2>
                           </div>
                           
                        </mat-card-content>
                        <mat-card-actions>
                           <div class="bsheet__button-cancel" fxLayout="row" fxLayoutAlign="center center" >
                              <button mat-raised-button (click)="delete(false)" color="accent" >Cancel</button>
                              <button mat-raised-button (click)="delete(true)" color="primary" >Delete</button>
                           </div>
                        </mat-card-actions>
                  </div>   
   `
 })

 export class BottomSheetConfirm implements OnInit {

   dataLength: number = 0;
   serials: string[];

   constructor(
      private bottomSheetRef: MatBottomSheetRef<BottomSheetConfirm>,
      @Inject(MAT_BOTTOM_SHEET_DATA) public data: MbData
   ) {}

   ngOnInit()
   { 
      this.dataLength = this.data.length
   }

   delete(action: boolean)
   {
      this.data.delete = action;
      this.bottomSheetRef.dismiss(this.data);
   }
 }