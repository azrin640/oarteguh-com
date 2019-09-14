import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { editorConfig } from '../services/post-service/editor-config';


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

  buttonClick(button: ElementRef){
      console.log(button);
  }

}
