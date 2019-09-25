import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/configurations/interface/post';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';

@Component({
  selector: 'app-admin-post-edit',
  templateUrl: './admin-post-edit.component.html',
  styleUrls: ['./admin-post-edit.component.scss']
})
export class AdminPostEditComponent implements OnInit {

   post: Post;

  constructor(
     private route: ActivatedRoute,
      private postService: PostService
  ) { }

  ngOnInit() {
     this.route.paramMap.subscribe(
        (response: any) => {
           let postId = response.params.id;
           this.postService.getPost(postId).subscribe(
              (response: Post) => {
                 if(response && response._id){
                    this.postService.postCard.subscribe(
                       (post: Post) => {
                          this.post = post;
                       }
                    )
                 }
              }
           )

        }
     )
  }

}
