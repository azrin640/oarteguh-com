import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-form-avatar',
  templateUrl: './form-avatar.component.html',
  styleUrls: ['./form-avatar.component.scss']
})
export class FormAvatarComponent implements OnInit {

   profile: User;
   avatars = {
      boys: [ 'avatars/boy', 'avatars/boy-1', 'avatars/boy-2', 'avatars/boy-3', 'avatars/boy-4', 'avatars/boy-5' ],
      girls: [ 'avatars/girl', 'avatars/girl-1', 'avatars/girl-2', 'avatars/girl-3', 'avatars/girl-4', 'avatars/girl-5' ]
   };
   formAvatarGroup;

  constructor(
     private _profileService: ProfileService,
     private _snackBar: MatSnackBar
  ) { 

      this.formAvatarGroup = new FormGroup({
         image: new FormControl('')
      })
  }

  ngOnInit() {

      this._profileService.profile.subscribe(
         (response: User) => {         
               if(response && response._id) this.profile = response;
               else this.profile = null;
      });

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
            if(response && response._id){
               this._snackBar.open(`Your " ${itemKey} " update to " ${itemValue} " is successfull`, 'X', {duration: 10000, panelClass: 'pink-style'});
               this._profileService.userSource.next(response);
               this.formAvatarGroup.get(itemKey).reset();                  
            }
            else this._snackBar.open('Your update is not successfull, please try again.', 'X', {duration: 10000, panelClass: 'red-style'});
         },
         error => this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'})
      )  
   }

}
