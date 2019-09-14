import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss']
})
export class VisitorFormComponent implements OnInit {
   
   visitorForm;

  constructor() {
     this.visitorForm = new FormGroup({
         name: new FormControl('', Validators.minLength(3))
     });
   }

  ngOnInit() {
  }

  get nameCtrl(){ return this.visitorForm.get('name')};

  visitor()
  {
     console.log(this.nameCtrl);
  }

}
