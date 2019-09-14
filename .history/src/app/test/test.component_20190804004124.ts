import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterContentInit {

   content: HTMLDivElement;

  constructor() {
      
   }

  ngOnInit() {}

  ngAfterContentInit(){
     console.log(this.content);
  }
}
