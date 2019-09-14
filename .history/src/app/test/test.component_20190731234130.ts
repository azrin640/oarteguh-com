import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { editorConfig } from '../services/post-service/editor-config';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   htmlContent = new FormControl('');

  constructor() { }

  ngOnInit() {

  }

  contentEvent(event){
   //   console.log(event.target.innerHTML);
   console.log(editorConfig);
  }

}
