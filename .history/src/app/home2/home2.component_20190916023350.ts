import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { xEnter, yEnter, banner1Enter, banner2Enter, banner3Enter } from '../animations/anim-fn';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  animations: [
      trigger('banner1Enter', [
         transition(':enter', [
            useAnimation(banner1Enter)
      ]) ]),
      trigger('banner2Enter', [
         transition(':enter', [
            useAnimation(banner2Enter)
      ]) ]),
      trigger('banner3Enter', [
         transition(':enter', [
            useAnimation(banner3Enter)
      ]) ]),
   ]
})
export class Home2Component implements OnInit {

   banner1AnimationDone: boolean = false;
   banner2AnimationDone: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  banner1Done(event){
      console.log(event);
      if(event.phaseName === 'done') this.banner1AnimationDone = true;
  }

  banner2Done(event){
     if(event.phaseName === 'done') this.banner2AnimationDone = true;
  }

}
