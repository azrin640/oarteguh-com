import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { iconButtonEnter } from 'src/app/animations/anim-fn';
import { ActivatedRoute } from '@angular/router';

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

  clickTnc()
  {
      let params = this.activatedRoute;
      console.log(params);

  }
}
