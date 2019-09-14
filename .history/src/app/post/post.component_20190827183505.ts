import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
     private router: ActivatedRoute
  ) { }

  ngOnInit() {

      this.router.paramMap.subscribe(
         (response: any) => {
            let postId = response.params.id;
            console.log(postId);
         }
      )
  }

}
