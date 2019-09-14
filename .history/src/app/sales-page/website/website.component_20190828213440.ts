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

   painPoints = [
      { 
         title: 'Anda didatangi idea yang unik untuk perniagaan?',
         image: 'ideas.jpg'
      },
      {
         title: 'Atau anda mencari cara baru untuk mencari pelanggan atau meluaskan pasaran barangan jualan anda?',
         image: 'strategy.jpg'
      }
   ]

  constructor() { }

  ngOnInit() {
  }

}
