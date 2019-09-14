import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { iconButtonEnter } from 'src/app/animations/anim-fn';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';

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
     private activatedRoute: ActivatedRoute
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
         (params => this.authToken = params.authToken)
      )
  }
}
