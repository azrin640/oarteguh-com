import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

   post: Post;

  constructor(
     private postService: PostService
  ) { }

  ngOnInit() {

   this.postService.postCard.subscribe(
      (response: Post) => {
         if(response && response._id){
            console.log(response);
            this.post = response;
      }}
   )

  }

}
