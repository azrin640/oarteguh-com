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



  constructor() {
   }

  ngOnInit() {

  }
}
