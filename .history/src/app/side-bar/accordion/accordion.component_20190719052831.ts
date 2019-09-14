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

   }

  ngOnInit() {
     this._profileService.profile.subscribe(
        (response: User) => {         
            if(response && response.id) this.profile = response;
            else this.profile = null;
        }
     );


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

  updateProfile(keyProfile)
  {   let value = this.formProfile.get(`${keyProfile}`).value;
      keyProfile.value = value;
      let data = {
         _id: this.profile._id,
         keyProfile
      };
     console.log(data);
  }
   //   const itemKey = Object.keys(userData)
   //    .reduce((acc, value) => {         
   //       if(value != ('_id' && 'type')) acc = value;
   //       return acc;
   //    }, {});

   //    let itemValue = userData[`${itemKey}`];

   //   this._profileService.updateUser(userData).subscribe(
   //      (response: User) => {
   //         if(response && response.id){
   //            this._snackBar.open(`Your " ${itemKey} " update to " ${itemValue} " is successfull`, 'X', {duration: 10000, panelClass: 'pink-style'});
   //            this._profileService.userSource.next(response);
   //            let control = this.profileForm.get(`${itemKey}`).value;
   //            console.log(control);

               
   //         }
   //         else this._snackBar.open('Your update is not successfull, please try again.', 'X', {duration: 10000, panelClass: 'red-style'});
   //      },
   //      error => this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'})
   //   )
  

}
