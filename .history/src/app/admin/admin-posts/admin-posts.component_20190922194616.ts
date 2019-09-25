import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  constructor(
     private postService: PostService
  ) { }

  ngOnInit() {

      this.postService.getAllPost().subscribe(
         (response: Post[]) => {
            console.log(response);
         }
      )
  }

}
