import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';
import { primaryButtonClick } from 'src/app/animations/anim-fn';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

   profileUpdateForm = new FormGroup({
      email: new FormControl ('', [Validators.required])
   });
  
  constructor(
     private profileService: ProfileService
  ) { }

  ngOnInit() {
     this.profileService.profile.subscribe(
        (response: User) => {
           
            if(response && response.id) this.profile = response;
            else this.profile = null;
            console.log(this.profile);
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

  updateProfile(data)
  {
     console.log(data);
  }

}
