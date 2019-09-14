import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   editorConfig: AngularEditorConfig = {
      editable: true
   }
   htmlContent = new FormControl('');

  constructor() { }

  ngOnInit() {

  }

}
