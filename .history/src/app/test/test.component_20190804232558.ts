import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MatButton } from '@angular/material';

export interface Selected{
   buttonId?: string,
   attrs?: {
      id?: string,
      color?: string,
   },
   start?: number,
   end?: number,
   type?: string,
   length?: number,
   element?: string,
   content?: string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   selection: Selection;
   ranges: Range[];
   content: string;
   selected: Selected = { attrs: { color: 'accent'}};
   id: number = 0;

  constructor() {
      
   }

  ngOnInit() {

      let content = document.getElementById('content').innerText;
      this.content = content;
  }

  contentSelected(): Selected
  {
     let selection: any = document.getSelection();
     this.selection = selection;
     let ranges = [];
     for(let i = 0; i < selection.rangeCount; i++) {
         ranges[i] = selection.getRangeAt(i);
     };
     this.ranges = ranges;
     
     let selectedContent = this.content;
     let selected: Selected = {
         start    : selection.anchorOffset,
         end      : selection.focusOffset,
         type     : selection.type.toLowerCase(),
         length   : selection.focusNode.nodeValue.length
     };
     let content = selectedContent.slice((selected.start - 1), (selected.end - 1));
     selected.content = content;
     return selected;
  }

  createNode(button: MatButton){
      let cmdButton = button._elementRef.nativeElement.id;
      let selected: Selected = this.contentSelected();      
      let elementId = this.id++;
      this.selected = { 
         buttonId: cmdButton, 
         attrs: { id: 'strong-' + elementId, color: 'primary' }
      };
      let range = this.ranges[0];

      let newElement = document.createElement('strong');

      if(selected && selected.type === 'caret'){        
         // newElement.appendChild(event.target.value);
      }
      else if(selected && selected.type === "range"){
            newElement.textContent = selected.content;
            range.deleteContents();
            range.insertNode(newElement);
      }
      else console.log('Please select element to bold');
  }

}
