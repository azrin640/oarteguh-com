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
   element?: string,
   content?: string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   selected: Selected = { attrs: { color: 'accent'}};
   id: number = 0;

  constructor() {
      
   }

  ngOnInit() {

      const content = document.getElementById('content').innerText;
      this.selected.content = content;
  }

  contentSelected(): Selected
  {
     let selection: any = document.getSelection();
     let selectedContent = this.selected.content;
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

  insertBold(event){
      let selected: Selected = this.contentSelected();      
      let newId = this.id++;
      this.selected.attrs = { id: 'strong-' + newId, color: 'primary' };

      let newElement = document.createElement('strong');

      if(selected && selected.type === 'caret'){        
         newElement.appendChild(event.target.value);
      }
      else if(selected && selected.type === "range"){
            newElement.nodeValue = selected.content;
            // let rangeElement = newElement.nodeValue;
            console.log(selected.content);
      }
      else console.log('Please select element to bold');
  }

}
