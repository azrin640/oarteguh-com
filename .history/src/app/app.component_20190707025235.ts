import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{
  title = 'strong-arrow';
  init: boolean = true;

  ngAfterContentInit()
  {
     this.init = true;
  }
  

}
