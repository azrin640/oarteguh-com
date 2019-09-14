import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
   
   step = null;
   active: boolean = true;
   profile: User;
   color = 'primary';

   email = new FormControl ('', [ Validators.email]);
  
  constructor(
     private _profileService: ProfileService,
     private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
     this._profileService.profile.subscribe(
        (response: User) => {           
            if(response && response.id) this.profile = response;
            else this.profile = null;
        }
     )
  }  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateProfile(input: HTMLInputElement)
  {
     this._profileService.updateUser(input).subscribe(
        (response: User) => {
           console.log(response);
        }
     )
  }

  testPanel(val)
  {
     console.log(val);
  }

}
