import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { xEnter, yEnter, banner1Enter } from '../animations/anim-fn';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  animations: [
      trigger('banner1Enter', [
         transition(':enter', [
            useAnimation(banner1Enter)
      ]) ]),
      trigger('yEnter', [
         transition(':enter', [
            useAnimation(yEnter)
      ]) ])
   ]
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
