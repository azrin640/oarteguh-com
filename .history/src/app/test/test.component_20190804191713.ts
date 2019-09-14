import { Component, OnInit, AfterContentInit } from '@angular/core';

export interface Selected{
   attrs?: {
      id?: string,
      color?: string,
   },
   start?: number,
   end?: number,
   type?: string,
   length?: number,
   element?: string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   selected: Selected;
   id: number = 0;
   attrs: Selected['attrs'] = { color: 'accent'};

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
      let attrs = this.attrs;
      let newId = this.id++;
      attrs = {
         id: 'strong-' + newId,
         color: 'primary'
      };
      this.attrs = attrs;

     if(selected && selected.type === 'caret'){
        let newElement = document.createElement('strong');
         console.log(newElement);
     }
     else if(selected && selected.type === "range"){
         console.log(selected);
     }
     else console.log('Please select element to bold');
  }

}
