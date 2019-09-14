import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-form-personal',
  templateUrl: './form-personal.component.html',
  styleUrls: ['./form-personal.component.scss']
})
export class FormPersonalComponent implements OnInit {

   profile: User;
   formPersonalProfile;

  constructor(
         private _profileService: ProfileService,
         private _snackBar: MatSnackBar,

  ) { 

      this.formPersonalProfile = new FormGroup({
         email: new FormControl ({ value: '', disabled: true}, [ Validators.email ]),
         name: new FormControl ('', [ Validators.minLength(4) ]),
         birthday: new FormControl ('')
      });
  }

  ngOnInit() {

      this._profileService.profile.subscribe(
         (response: User) => {         
            if(response && response.id) this.profile = response;
            else this.profile = null;
      });

  }

  // Controls get method
  get emailCtrl(){ return this.formPersonalProfile.get('email'); };
  get nameCtrl(){ return this.formPersonalProfile.get('name'); };
  get birthdayCtrl(){ return this.formPersonalProfile.get('birthday')};

  updateProfile(userData)
   {  const itemKey = Object.keys(userData)
         .reduce((acc, value) => {         
            if(value != ('_id' && 'type')) acc = value;
            return acc;
         }, {});

      let itemValue = userData[`${itemKey}`];

      this._profileService.updateUser(userData).subscribe(
         (response: User) => {
            if(response && response.id){
               this._snackBar.open(`Your " ${itemKey} " update to " ${itemValue} " is successfull`, 'X', {duration: 10000, panelClass: 'pink-style'});
               this._profileService.userSource.next(response);
               this.formPersonalProfile.get(itemKey).reset();                  
            }
            else this._snackBar.open('Your update is not successfull, please try again.', 'X', {duration: 10000, panelClass: 'red-style'});
         },
         error => this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'})
      )  
   }
}
