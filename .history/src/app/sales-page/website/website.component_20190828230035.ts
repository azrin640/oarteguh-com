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
         title: 'Anda didatangi <span class="lm__text-title-primary">idea</span> yang unik untuk perniagaan?',
         image: 'ideas.jpg'
      },
      {
         title: 'Atau anda mencari cara baru untuk mencari pelanggan atau <span class="lm__text-title-primary">meluaskan pasaran</span> barangan jualan anda? Maklumlah zaman sekarang kebanyakan sale atas talian.Tiada siapa yang tahu atau dapat tolong anda?',
         image: 'strategy.jpg'
      },
      {
         title: 'Atau bajet syarikat anda tidak cukup untuk menggaji Digital Manager atau Ecommerce Manager yang rata rata gaji mereka RM5K ke atas sebulan?',
         image: 'stress.jpg'
      }
   ]

  constructor() { }

  ngOnInit() {
  }

}
