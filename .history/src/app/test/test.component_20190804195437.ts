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

   content: Selected['content'];
   selected: Selected;
   id: number = 0;
   attrs: Selected['attrs'] = { color: 'accent'};

  constructor() {
      
   }

  ngOnInit() {

      const content = document.getElementById('content').innerText;
      console.log(content);
      this.content = content;

  }

  contentSelected(){
     const selection = document.getSelection();
     let selectedContent = this.content;
     selectedContent.slice(selection.anchorOffset, selection.focusOffset);

     const selected = {
         start    : selection.anchorOffset,
         end      : selection.focusOffset,
         type     : selection.type.toLowerCase(),
         length   : selection.focusNode.nodeValue.length,
         content  : selectedContent
     };
     this.selected = selected;
     console.log(selected);
  }

  insertBold(event){
      const selected = this.selected;      
      let newId = this.id++;
      let attrs = this.attrs;
      attrs = {
         id: 'strong-' + newId,
         color: 'primary'
      };
      this.attrs = attrs;
      let content = this.content;

     if(selected && selected.type === 'caret'){
        let newElement = document.createElement('strong');
        newElement.appendChild(event.target.value);
         console.log(newElement);
     }
     else if(selected && selected.type === "range"){
         console.log(selected);
     }
     else console.log('Please select element to bold');
  }

}
