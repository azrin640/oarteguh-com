import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { iconButtonEnter } from 'src/app/animations/anim-fn';

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

  constructor() { }

  ngOnInit() {
  }

  mouseEnterCard(event)
  {
     console.log(event.returnValue);
      this.mouseEnter = event.returnValue;
  }

}
