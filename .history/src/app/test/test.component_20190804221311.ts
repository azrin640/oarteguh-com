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

   selection: Selection;
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

  insertBold(event){
      let content = this.content;
      let selected: Selected = this.contentSelected();      
      let newId = this.id++;
      this.selected.attrs = { id: 'strong-' + newId, color: 'primary' };
      let selection = this.selection;

      let newElement = document.createElement('strong');

      if(selected && selected.type === 'caret'){        
         newElement.appendChild(event.target.value);
      }
      else if(selected && selected.type === "range"){
            newElement.textContent = selected.content;
            console.log(selection);
            console.log(newElement);
      }
      else console.log('Please select element to bold');
  }

}
