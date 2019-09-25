import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { banner1Enter, banner2Enter, banner3Enter, banner4Enter, banner5Enter } from '../../animations/anim-fn';

@Component({
  selector: 'app-banner-full',
  templateUrl: './banner-full.component.html',
  styleUrls: ['./banner-full.component.scss'],
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
      trigger('banner4Enter', [
         transition(':enter', [
            useAnimation(banner4Enter)
      ]) ]),
      trigger('banner5Enter', [
         transition(':enter', [
            useAnimation(banner5Enter)
      ]) ]),
   ]
})
export class BannerFullComponent implements OnInit {

   banner1AnimationDone: boolean = false;
   banner2AnimationDone: boolean = false;
   banner3AnimationDone: boolean = false;
   banner4AnimationDone: boolean = false;

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

   banner3Done(event){
      if(event.phaseName === 'done') this.banner3AnimationDone = true;
   }

   banner4Done(event){
      if(event.phaseName === 'done') this.banner4AnimationDone = true;
   }

}
