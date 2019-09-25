import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SerialAuthService } from 'src/app/services/serial-no/serial-auth.service';
import { MatSnackBar } from '@angular/material';
import { Serial } from 'src/app/interface/serial';

@Component({
  selector: 'app-admin-serial',
  templateUrl: './admin-serial.component.html',
  styleUrls: ['./admin-serial.component.scss']
})
export class AdminSerialComponent implements OnInit {

   serialForm = new FormGroup({

      serial1: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      serial2: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      volume:  new FormControl('', Validators.required),
      market:  new FormControl('', Validators.required)
      
   });
   markets = [
      {area: 'Malaysia'},
      {area: 'Singapore'} 
   ];

  constructor(
     private serialService: SerialAuthService,
     public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  submitSerialForm()
  {
     this.serialService.generateSerialNo(this.serialForm.value).subscribe(
         (response: any) => {
            if(response.code) {               
               this.snackBar.open(`Bulk serial number generation error: ${response.name}`, 'X', { duration: 10000, panelClass: 'primary' }); }
            else{
               this.serialService.updateSerials();
               this.snackBar.open('Bulk serial number generation is successfull', 'X', { duration: 10000, panelClass: 'primary' });
            }
         }
      )
  }

}
