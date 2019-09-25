import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-what',
  templateUrl: './about-what.component.html',
  styleUrls: ['./about-what.component.scss']
})
export class AboutWhatComponent implements OnInit {

   descriptions = [
      {
         title: 'Web Solutions',
         image: 'code.png'
      },
      {
         title: 'Online Biz Solutions',
         image: 'shopping-cart.png'
      },
      {
         title: 'Biz Development Solutions',
         image: 'line-chart.png'
      },
      {
         title: 'Cost Saving Solutions',
         image: 'analytics.png'
      }

   ]

  constructor() { }

  ngOnInit() {
  }

}
