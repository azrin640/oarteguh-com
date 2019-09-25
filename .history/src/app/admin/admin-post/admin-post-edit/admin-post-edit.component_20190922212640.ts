import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-post-edit',
  templateUrl: './admin-post-edit.component.html',
  styleUrls: ['./admin-post-edit.component.scss']
})
export class AdminPostEditComponent implements OnInit {

  constructor(
     private routerLink: RouterLink
  ) { }

  ngOnInit() {
     this.routerLink.queryParams.subscribe(
        (response: any) => {
           console.log(response);
        }
     )
  }

}
