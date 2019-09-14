import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { yEnter } from 'src/app/animations/anim-fn';

export interface Activated { active: boolean, id: string };

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
         id: 'package',
         title: 'Anda sedang merangka strategi untuk <span class="lm__text-title-1-7rem-primary">mencari pelanggan baru</span> atau <span class="lm__text-title-1-7rem-primary">meluaskan pasaran</span> barangan jualan atau servis anda? Maklumlah zaman sekarang kebanyakan sale adalah secara atas talian. <br> <br> Tiada siapa yang tahu atau dapat tolong atau beri penerangan kepada anda macamana sebenarnya strategi atau penggunaan  <span class="lm__text-title-1-7rem-primary">Landing Page</span>, <span class="lm__text-title-1-7rem-primary">Sales Page</span>, <span class="lm__text-title-1-7rem-primary">Blog</span>, <span class="lm__text-title-1-7rem-primary">Iklan Google/Facebook</span> atau konten yang akan menarik banyak <span class="lm__text-title-1-7rem-primary">Like dan Share</span>?',
         image: 'strategy.jpg'
      },
      {
         id: 'webmaster',
         title: 'Atau bajet syarikat anda <span class="lm__text-title-1-7rem-primary">tidak mampu</span> untuk menggaji Digital Manager atau Ecommerce Manager yang rata rata gaji mereka RM5K ke atas sebulan tapi anda tahu pentingnya perniagaan atas talian yang mempunyai 18 juta pengguna Malaysia. Nak buat sendiri makan  <span class="lm__text-title-1-7rem-primary">masa yang panjang</span> dan  <span class="lm__text-title2rem-primary">kos yang tinggi</span>.',
         image: 'stress.jpg'
      },
      { 
         id: 'custom',
         title: 'atau anda didatangi <span class="lm__text-title-1-7rem-primary">idea</span> yang unik untuk perniagaan baru atas talian? Mungkin anda suka bisnes model Lizada, Lilong, Midah atau lain lain yang dipanggil <span class="lm__text-title-1-7rem-primary">Multivendor Website</span> ? Diorang tak perlu buat apa-apa, sedar sedar duit masuk.',
         image: 'ideas.jpg'
      }
   ];
   active: Activated;

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
     console.log(event);
     let sectId = event.target.parentNode.id.split('-')[1];
     let id = `sect-${sectId}`;
     console.log(id);

      this.active = { active: true, id: event.target.id };
      
  }

}
