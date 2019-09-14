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

   issues = [
      { 
         title: 'Anda didatangi idea yang unik untuk perniagaan?',
         image: 'ideas.jpg'
      },
      {
         title: 'Atau anda mencari cara baru untuk mencari pelanggan atau meluaskan pasaran barangan jualan anda? Maklumlah zaman sekarang semuanya atas talian',
         image: 'strategy.jpg'
      },
      {
         title: 'Atau bajet syarikat anda tidak cukup untuk menggaji Digital Manager atau Ecommerce Manager yang rata rata gaji mereka RM4K ke atas.',
         image: 'stress.jpg'
      }
   ]

  constructor() { }

  ngOnInit() {
  }

}
