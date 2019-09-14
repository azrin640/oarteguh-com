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
     const selection = document.getSelection();
     const selected = {
         start    : selection.anchorOffset,
         end      : selection.focusOffset,
         type     : selection.type,
         length   : selection.focusNode.nodeValue.length
     }
     console.log(selected);
  }

}
