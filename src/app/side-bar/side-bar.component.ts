import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile-service/profile-service.service';
import { User } from '../interface/user';
import { trigger, transition, useAnimation } from '@angular/animations';
import { imageEnter, imageEnterDrop } from '../animations/anim-fn';
import { VisitorService } from '../services/visitor-service/visitor-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
   trigger('imageEnterDrop', [
      transition(':enter', [            
         useAnimation(imageEnterDrop)
   ]) ]) ]
})
export class SideBarComponent implements OnInit {

   profile: User;
   enteredImage: boolean = false;
   visitor: User;

  constructor(
     private profileService: ProfileService,
     private visitorService: VisitorService
  ) { 
         this.profileService.profile.subscribe(
            (response: User) => {
               if(response && response.id) {
                  this.profile = response; 
               }          
               else this.profile = null;   
            }
         )

         const visitor = this.visitorService.visitorProfile.subscribe(
            (response: User) => {
               if(response) this.visitor = response;
               else this.visitor = null;
            } 
         )
  }

  ngOnInit() {  }

  mouseEnterImage(event)
  {
      this.enteredImage = event.returnValue;
  }

  mouseLeaveImage(event)
  {
      this.enteredImage = !event.returnValue;
  }

}
