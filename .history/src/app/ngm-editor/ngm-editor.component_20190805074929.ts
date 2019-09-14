import { Component, OnInit } from '@angular/core';
import { Selected } from './selected';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-ngm-editor',
  templateUrl: './ngm-editor.component.html',
  styleUrls: ['./ngm-editor.component.scss']
})
export class NgmEditorComponent implements OnInit {

   editable: boolean = false;
   selection: Selection;
   ranges: Range[];
   content: string;
   selected: Selected = { button: { color: 'accent'}};
   id: number = 1001;

   constructor() {
            this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus eget ante commodo sodales. Fusce lacus nisl, aliquam sed nisl varius, rutrum facilisis enim. Aenean sed libero justo. In hac habitasse platea dictumst. Nunc justo purus, tincidunt nec rhoncus vel, vehicula a mauris. In congue, justo a accumsan tempus, lectus turpis vestibulum nibh, in faucibus lacus tellus sed dui. Fusce magna leo, condimentum sed tincidunt sed, rutrum non ex. In lobortis cursus massa, eget auctor turpis pretium vitae. Vestibulum erat metus, pharetra non bibendum non, auctor sit amet lectus. Phasellus lobortis nunc eget lectus consectetur vulputate nec in arcu. Fusce tempus nisl sit amet nibh ullamcorper congue. Maecenas convallis orci rhoncus fermentum pharetra. Pellentesque mauris nunc, blandit nec arcu sed, suscipit semper sem. In hac habitasse platea dictumst. Pellentesque posuere laoreet eros, ac dignissim dolor. Morbi rhoncus congue efficitur. Donec mollis, ipsum in efficitur imperdiet, tellus elit condimentum sem, sit amet facilisis nisi nulla eget enim. Proin dolor lacus, tincidunt dictum sapien eu, condimentum feugiat leo. Ut turpis nunc, feugiat ac lacinia non, viverra ut tortor. Proin et nisi malesuada erat dictum viverra. In tincidunt tincidunt tortor, at molestie neque ultricies nec. Donec non gravida odio, eget vehicula justo. Proin purus risus, vulputate non malesuada eu, rutrum eget orci. Morbi neque eros, lacinia non tortor vel, ornare maximus lectus. Donec eget quam arcu. Sed leo odio, viverra a fringilla eu, finibus a leo. Nunc pharetra dignissim mi sit amet porta. Phasellus posuere aliquet mauris, in tincidunt risus eleifend ac. Vivamus venenatis placerat tortor, id congue magna. Etiam non nunc vitae leo suscipit dignissim et a libero. Nam venenatis tellus vitae tortor dictum facilisis. Nam in justo non massa semper tempus ut a velit. Aliquam tincidunt tellus eget nulla tristique, eget sollicitudin nunc vestibulum. Nullam nec turpis sit amet odio egestas mattis eget accumsan justo. Pellentesque auctor tempus quam a varius. Suspendisse aliquet ipsum quis tempor efficitur. Curabitur faucibus porta diam, ullamcorper condimentum felis auctor at. Maecenas facilisis, erat vitae ultricies malesuada, libero augue commodo nibh, vel commodo neque elit quis metusCurabitur suscipit varius pulvinar. Duis ligula arcu, cursus non urna sit amet, gravida interdum sem. Nam ullamcorper elit lorem, sed aliquet ligula dignissim id. Sed ullamcorper commodo nunc et condimentum. Nam metus nisl, pulvinar non ex ac, suscipit ullamcorper lacus. Phasellus pretium placerat imperdiet. Vestibulum condimentum pellentesque ornare. Pellentesque bibendum commodo felis, eu mollis odio lacinia quis. Maecenas felis ipsum, bibendum eget lacinia non, porta vitae mi. Sed sagittis quam eget enim pulvinar, a viverra eros mollis. Mauris facilisis nulla est, quis consectetur neque venenatis quis. Mauris egestas ligula at tortor feugiat interdum. Ut lobortis est non tortor sollicitudin, non commodo lectus gravida. Suspendisse lacinia fermentum consectetur. Etiam quis neque vel leo pellentesque vestibulum sed nec nisi. Proin non dui quis dui lobortis volutpat. Mauris ac sapien dolor.';
   }

   ngOnInit() {
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
            start    : (selection.anchorOffset - 1),
            end      : (selection.focusOffset -1),
            type     : selection.type.toLowerCase(),
            length   : selection.focusNode.nodeValue.length
      };
      let content = selectedContent.slice((selected.start), (selected.end));
      selected.content = content;
      return selected;
   }

   createElement(selected, command): HTMLElement
   {
         let id = command;
         if(command === 'italic') command = 'span';
         else command;
         let newElement = document.createElement(command) as HTMLElement;
         newElement.id = selected.element.id;
         let attrb = document.createAttribute('class');

         if(id === 'italic') attrb.value = `ngm__span-${id}`;
         else attrb.value = `ngm__${id}`;

         newElement.setAttributeNode(attrb);
         return newElement;

   }

   createNode(inputA, inputB){
         let cmdButton:any = null;

         if(inputA === 'dummy') cmdButton = inputB._elementRef.nativeElement.id;
         else if(inputB === 'dummy') cmdButton = inputA;

         let selected: Selected = this.contentSelected();              
         let elementId = this.id;
         ++ elementId;
         this.id = elementId;
         selected.button = { id: cmdButton, color: 'primary' };        
         selected.element =  { id: `${cmdButton}-${elementId}`};  
         let ranges = this.ranges;
         let range = ranges[0];
         let newElement = this.createElement(selected, cmdButton);

         if(selected && selected.type === 'caret'){   
            range.insertNode(newElement);
            this.resetToInit();     
         }
         else if(selected && selected.type === "range"){
               newElement.textContent = selected.content;               
               range.deleteContents();
               range.insertNode(newElement);
               this.resetToInit();
         }
         else console.log('Please select element or elements to edit');
   }

   resetToInit(){
      this.selected = { 
         button      : { id: '', color: 'accent'},
         element     : { id: ''},
         start       : 0,
         end         : 0,
         type        : '',
         length      : 0,
         content     : ''         
      };
      this.ranges = [];
   }

}
