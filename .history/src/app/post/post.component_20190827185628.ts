import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post-service/post-service.service';
import { Post } from '../interface/post';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
     private router: ActivatedRoute,
     private postService: PostService,
     public snackBar: MatSnackBar
  ) { }

  ngOnInit() {

      this.router.paramMap.subscribe(
         (response: any) => {
            let postId = response.params.id;
            if(postId) this.getPost(postId);
            else this.snackBar.open('Post does not exist', 'X', { duration: 10000, panelClass: 'red-style'});
         }
      )
  }

  getPost(id){
     this.postService.getPost({ id }).subscribe(
        (response: Post) => {
           console.log(response);
        }
     )
  }

}
