import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor-service/visitor-service.service';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss']
})
export class VisitorFormComponent implements OnInit {
   
   visitorForm;

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

  visitor()
  {
     console.log(this.nameCtrl.value);
     this.visitorService.visitorSource.next(this.nameCtrl.value);
  }

}
