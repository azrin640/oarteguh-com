import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor-service/visitor-service.service';
import { User } from 'src/app/interface/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss']
})
export class VisitorFormComponent implements OnInit {
   
   visitorForm;
   visitor: User;

  constructor(
     private visitorService: VisitorService,
     private snackBar: MatSnackBar
  ) {
         
   }

  ngOnInit() {
      this.visitorForm = new FormGroup({
               name: new FormControl('', [ Validators.required, Validators.minLength(3) ])
         });
  }

  get nameCtrl(){ return this.visitorForm.get('name')};

  visitorSubmit()
  {
     this.visitorService.visitorSource.next({name: this.nameCtrl.value});

     this.visitorService.visitorProfile.subscribe(
         (response: User) => {
            if(response){ 
               this.visitor = response;
               this.snackBar.open('Thank you, you are are now logged in as a visitor', 'X', { duration: 1000, panelClass: 'red-theme' });
            }
            else this.visitor = null;
         } 
      )
  }

}
