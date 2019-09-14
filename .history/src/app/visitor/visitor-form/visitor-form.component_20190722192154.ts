import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor-service/visitor-service.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss']
})
export class VisitorFormComponent implements OnInit {
   
   visitorForm;
   visitor: User;

  constructor(
     private visitorService: VisitorService
  ) {
         this.visitorForm = new FormGroup({
               name: new FormControl('', [ Validators.required, Validators.minLength(3) ])
         });
   }

  ngOnInit() {
      

  }

  get nameCtrl(){ return this.visitorForm.get('name')};

  visitorSubmit()
  {
     this.visitorService.visitorSource.next({name: this.nameCtrl.value});

     this.visitorService.visitorProfile.subscribe(
         (response: User) => {
            if(response) this.visitor = response;
            else this.visitor = null;
         } 
      )
  }

}
