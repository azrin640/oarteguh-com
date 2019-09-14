import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-post',
  templateUrl: '../form-post.component.html',
  styleUrls: ['./preview-post.component.scss']
})
export class PreviewPostComponent implements OnInit {

   sidebar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
