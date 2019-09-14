import { Component, OnInit, AfterContentInit } from '@angular/core';

export interface Selected{
   start: number,
   end: number,
   type: string,
   length: number
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   selected: Selected;
   id: number = 0;
   attrs = { color: 'accent'};

  constructor() {
      
   }

  ngOnInit() {
  }

  contentSelected(){
     const selection = document.getSelection();
     const selected = {
         start    : selection.anchorOffset,
         end      : selection.focusOffset,
         type     : selection.type.toLowerCase(),
         length   : selection.focusNode.nodeValue.length
     };
     this.selected = selected;
     console.log(selected);
  }

  insertBold(){
     const selected = this.selected;

     if(selected && selected.type === 'caret'){
         console.log(selected);
     }
     else if(selected && selected.type === "range"){
         console.log(selected);
     }
     else console.log('Please select element to bold');
  }

}
