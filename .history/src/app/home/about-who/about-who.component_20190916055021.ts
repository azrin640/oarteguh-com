import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-who',
  templateUrl: './about-who.component.html',
  styleUrls: ['./about-who.component.scss']
})
export class AboutWhoComponent implements OnInit {

   descriptions = [
      { 
         title: 'Inventor',
         image: 'trophy.png',
         description: 'With multi winning awards, which includes prestigious MWA awards, you can rest assured that I will do my best in helping you.'
      },
      {
         title: 'Guide',
         image: 'strategy.png',
         description: 'I will be your guide to technological jargons and complications in this digital age. I will untangle, simplify and make it easy for you.'
      }

   ]

  constructor() { }

  ngOnInit() {
  }

}
