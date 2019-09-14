import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscriber, Observer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

   profile: User;
   formAddressProfile;
   citiesData;
   statesData;
   countriesData;
   updatedCity: boolean = false;
   

  constructor(
         private _profileService: ProfileService,
         private _snackBar: MatSnackBar
  ) { 

      this.formAddressProfile = new FormGroup({
         address: new FormControl ('', [ Validators.minLength(4) ]),
         address2: new FormControl ('', [ Validators.minLength(4) ]),
         city: new FormControl ('', [ Validators.minLength(3) ]),
         state: new FormControl ('', [ Validators.minLength(3) ]),
         country: new FormControl ('', [ Validators.minLength(3) ]),
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
  get addressCtrl(){ return this.formAddressProfile.get('address'); };
  get address2Ctrl(){ return this.formAddressProfile.get('address2'); };
  get cityCtrl(){return this.formAddressProfile.get('city')};
  get stateCtrl(){return this.formAddressProfile.get('state')};
  get countryCtrl(){return this.formAddressProfile.get('country')};


   getCity()
   {
      if(this.cityCtrl.valid){
         this._profileService.getCities({ _id: this.profile._id, city: this.cityCtrl.value }).subscribe(
            (response: any) => {
               this.citiesData = response;
            })}
   }

   getStates()
   {   if(this.stateCtrl.valid){
         this._profileService.getStates({ _id: this.profile._id, state: this.stateCtrl.value }).subscribe(
            (response: any) => {
               this.statesData = response;
            })}
   }

   getCountry()
   {
      if(this.countryCtrl.valid){
         this._profileService.getCountries({country: this.countryCtrl.value}).subscribe(
            (response: any) => {
               this.countriesData = response;
            })}
   }

   updateCity(userData){
      const result = this.updateProfile(userData) as Subscriber<Subscription>;
      if(!result.syncErrorThrown){        
         let resultSC = this.updateStateCountryByCity(this.cityCtrl.value);
      }
   }

   updateStateCountryByCity(city){   
       console.log('updating State and Country');
      let resultSC = this._profileService.updateStateCountryByCity(city).subscribe(
         (response: User) => {
            console.log(response);
            if(response && response._id){
               this._profileService.userSource.next(response);
      }});
   }

   

   updateProfile(userData){  
      const itemKey = Object.keys(userData)
         .reduce((acc, value) => {         
            if(value != ('_id' && 'type')) acc = value;
            return acc;
         }, {});

      let itemValue = userData[`${itemKey}`];

      const updatedInfo = this._profileService.updateUser(userData).subscribe(
         (response: User) => {
            if(response && response.id){
               this._snackBar.open(`Your " ${itemKey} " update to " ${itemValue} " is successfull`, 'X', {duration: 10000, panelClass: 'pink-style'});
               this._profileService.userSource.next(response);
               this.formAddressProfile.get(itemKey).reset();   
               this.updatedCity = true;              
            }
            else {
               this._snackBar.open('Your update is not successfull, please try again.', 'X', {duration: 10000, panelClass: 'red-style'});
               this.updatedCity = false;  
            }
         },
         error => {
            this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'});
            this.updatedCity = false;  
         }
      );
      return updatedInfo;
   }
}
