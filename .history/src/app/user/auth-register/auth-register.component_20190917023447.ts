import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { iconButtonEnter } from 'src/app/configurations/animations/anim-fn';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/configurations/interface/user';
import { ProfileService } from 'src/app/configurations/services/profile-service/profile-service.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
  animations: [
   trigger('iconClickButton', [
      transition(':enter', [
         useAnimation(iconButtonEnter)
   ]) ]) ]
})
export class AuthRegisterComponent implements OnInit {

   mouseEnter: boolean = false;
   authToken: User['authToken'];

  constructor(
     private activatedRoute: ActivatedRoute,
     private profileService: ProfileService
  ) { }

  ngOnInit() {
  }

  mouseEnterCard(event)
  {
      this.mouseEnter = event.returnValue;
  }

  mouseLeaveCard(event)
  {
      this.mouseEnter = !event.returnValue;
  }

  agreeTnc()
  {
      this.activatedRoute.params.subscribe(
         (params: any) => {
            let authToken = params.authToken as User['authToken'];
            this.authToken = authToken;
            this.sendAuthToken(authToken);
         }
      )
  }

  sendAuthToken(authToken)
  {
      this.profileService.checkAuthToken(authToken);
  }


}
