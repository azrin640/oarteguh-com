import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { xEnter } from '../animations/anim-fn';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  animations: [
   trigger('xEnter', [
      transition(':enter', [
         useAnimation(xEnter)
   ]) ]) ]
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
