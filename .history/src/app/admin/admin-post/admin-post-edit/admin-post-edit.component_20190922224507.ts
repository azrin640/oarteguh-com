import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/configurations/interface/post';

@Component({
  selector: 'app-admin-post-edit',
  templateUrl: './admin-post-edit.component.html',
  styleUrls: ['./admin-post-edit.component.scss']
})
export class AdminPostEditComponent implements OnInit {

  constructor(
     private router: ActivatedRoute
  ) { }

  ngOnInit() {
     this.router.paramMap.subscribe(
        (response: any) => {
           console.log(response);
        }
     )
  }

}
