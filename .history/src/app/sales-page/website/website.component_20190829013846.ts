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
         id: 'custom',
         title: 'Anda didatangi <span class="lm__text-title-primary">idea</span> yang unik untuk perniagaan baru atas talian? Mungkin anda suka bisnes model Lizada, Lilong, Midah atau lain lain yang dipanggil <span class="lm__text-title-primary">Multivendor Website</span> ? Diorang tak perlu buat apa-apa, sedar sedar duit masuk.',
         image: 'ideas.jpg'
      },
      {
         id: 'package',
         title: 'Atau anda sedang merangka strategi untuk <span class="lm__text-title-primary">mencari pelanggan baru</span> atau <span class="lm__text-title-primary">meluaskan pasaran</span> barangan jualan atau servis anda? Maklumlah zaman sekarang kebanyakan sale adalah secara atas talian.Tiada siapa yang tahu atau dapat tolong atau beri penerangan kepada anda macamana nak buat?',
         image: 'strategy.jpg'
      },
      {
         id: 'webmaster',
         title: 'Atau bajet syarikat anda <span class="lm__text-title-primary">tidak mampu</span> untuk menggaji Digital Manager atau Ecommerce Manager yang rata rata gaji mereka RM5K ke atas sebulan tapi anda tahu pentingnya perniagaan atas talian yang mempunyai 18 juta pengguna Malaysia. Nak buat sendiri makan masa yang panjang dan kos yang tinggi.',
         image: 'stress.jpg'
      }
   ]

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
      console.log(event);
  }

}
