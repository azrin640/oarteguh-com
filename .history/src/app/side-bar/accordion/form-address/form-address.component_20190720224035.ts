import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

   profile: User;
   formAddressProfile;
   countriesData;

  constructor(
         private _profileService: ProfileService,
         private _snackBar: MatSnackBar
  ) { 

      this.formAddressProfile = new FormGroup({
         address: new FormControl ('', [ Validators.minLength(4) ]),
         address2: new FormControl ('', [ Validators.minLength(4) ]),
         country: new FormControl ('', [ Validators.minLength(3) ]),
      });
  }

  ngOnInit() {

      // this.getCountry;

      this._profileService.profile.subscribe(
         (response: User) => {         
            if(response && response.id) this.profile = response;
            else this.profile = null;
      });

  }

  getCountry(event)
  {
      console.log(event);
  }

  // Controls get method
  get addressCtrl(){ return this.formAddressProfile.get('address'); };
  get address2Ctrl(){ return this.formAddressProfile.get('address2'); };

  updateProfile(userData)
   {  console.log(userData);
      const itemKey = Object.keys(userData)
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
               this.formAddressProfile.get(itemKey).reset();                  
            }
            else this._snackBar.open('Your update is not successfull, please try again.', 'X', {duration: 10000, panelClass: 'red-style'});
         },
         error => this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'})
      )  
   }
}
