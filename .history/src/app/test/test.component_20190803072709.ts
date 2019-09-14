import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { editorConfig } from '../services/post-service/editor-config';
import { MatButton } from '@angular/material';
import { BuiltinFunctionCall } from '@angular/compiler/src/compiler_util/expression_converter';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   editorConfig;
   htmlContent = new FormControl('');
   elem = { id: '', color: 'accent' };

  constructor() {
     this.editorConfig = editorConfig;
   }

  ngOnInit() {

  }

  buttonClick(elem: MatButton){
     const id = elem._elementRef.nativeElement.id;
      console.log(id); 

      // const id = event.target.
   }

}
