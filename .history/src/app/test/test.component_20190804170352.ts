import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   content;

  constructor() {
      
   }

  ngOnInit() {
      this.content = document.getElementById('content').textContent;
      const length = this.content.length;
      console.log(length);
  }

  contentChange(event){
     const selection = event.window.getSelection();
     console.log(selection);
  }

}
