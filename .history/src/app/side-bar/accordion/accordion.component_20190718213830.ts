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
   emailDisabled: boolean = true;
   startDate = new Date(1990, 0, 1);

   email = new FormControl ({ value: '', disabled: true}, [ Validators.email ]);
   name = new FormControl ('', [ Validators.minLength(4) ]);
   birthday = new FormControl ('');
   handphone = new FormControl ('');
   address = new FormControl ('', [ Validators.minLength(4) ]);
  
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

  updateProfile(userData: HTMLInputElement)
  {
     let item = Object.keys(userData)
      .reduce((acc, value) => {
         if(value != '_id' && 'type') acc = value;
         return acc;
      }, {});
      console.log(item);


     this._profileService.updateUser(userData).subscribe(
        (response: User) => {
           if(response && response.id){
              this._snackBar.open(`Your ${item} update to is successfull`, 'X', {duration: 10000, panelClass: 'pink-style'});
           }
           else this._snackBar.open('Your update is not successfull', 'X', {duration: 10000, panelClass: 'red-style'});
        },
        error => this._snackBar.open('Error' + error, 'X', {duration: 10000, panelClass: 'red-style'})
     )
  }

}
