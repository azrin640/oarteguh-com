import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  templateUrl: './main-logo.component.html',
  styleUrls: ['./main-logo.component.scss']
})
export class MainLogoComponent implements OnInit {

   logo: string = 'assets/logo_icons/logo-azrin-dev.png'

  constructor() { }

  ngOnInit() {
  }

}
