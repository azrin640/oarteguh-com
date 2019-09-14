import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { yEnter } from 'src/app/animations/anim-fn';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
  animations: [
   trigger('yEnter', [
      transition(':enter', [
         useAnimation(yEnter)
   ]) ]) ]
})

export class WebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
