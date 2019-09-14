import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';
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
   emailDisabled: boolean = true;
   startDate = new Date(1990, 0, 1);   
   formProfile;
   formList;
   avatar = {
      boy: [ 'boy-1', 'boy-2', 'boy-3', 'boy-4', 'boy-5' ]
   };

  constructor(
     private _profileService: ProfileService,
     private _snackBar: MatSnackBar
  ) {      
         this.formProfile = new FormGroup({
            email: new FormControl ({ value: '', disabled: true}, [ Validators.email ]),
            name: new FormControl ('', [ Validators.minLength(4) ]),
            birthday: new FormControl (''),
            handphone: new FormControl (''),
            address: new FormControl ('', [ Validators.minLength(4) ])
         });
         
         this.formList = Object.keys(this.formProfile.value).map((item) => {
            return item;
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
  get emailCtrl(){ return this.formProfile.get('email'); };
  get nameCtrl(){ return this.formProfile.get('name'); };
  get birthdayCtrl(){ return this.formProfile.get('birthday')};
  get handphoneCtrl(){ return this.formProfile.get('handphone')};


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

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
               this.formProfile.get(itemKey).reset();                  
            }
            else this._snackBar.open('Your update is not successfull, please try again.', 'X', {duration: 10000, panelClass: 'red-style'});
         },
         error => this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'})
      )  
   }

   iconClick()
   {
      console.log(this.birthdayCtrl);
   }
   
}
