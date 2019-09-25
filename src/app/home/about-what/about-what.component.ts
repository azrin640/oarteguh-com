import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-what',
  templateUrl: './about-what.component.html',
  styleUrls: ['./about-what.component.scss']
})
export class AboutWhatComponent implements OnInit {

   descriptions = [
      {
         title: 'Browser Based Application Solutions',
         image: 'code.png'
      },
      {
         title: 'Online Business Advertisement Solutions',
         image: 'shopping-cart.png'
      },
      {
         title: 'Business Development Solutions',
         image: 'line-chart.png'
      },
      {
         title: 'Cost Saving Initiative Solutions',
         image: 'analytics.png'
      }

   ]

  constructor() { }

  ngOnInit() {
  }

}
