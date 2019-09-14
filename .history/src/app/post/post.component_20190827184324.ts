import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post-service/post-service.service';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
     private router: ActivatedRoute,
     private postService: PostService
  ) { }

  ngOnInit() {

      this.router.paramMap.subscribe(
         (response: any) => {
            let postId = response.params.id;
            if(postId) this.getPost(postId);
         }
      )
  }

  getPost(id){
     this.postService.getPost(id).subscribe(
        (response: Post) => {
           console.log(response);
        }
     )
  }

}
