import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';

@Component({
  selector: 'app-admin-post-edit-form',
  templateUrl: './admin-post-edit-form.component.html',
  styleUrls: ['./admin-post-edit-form.component.scss']
})
export class AdminPostEditFormComponent implements OnInit {

  constructor(
   private route: ActivatedRoute,
   private postService: PostService
  ) { }

  ngOnInit() {

      this.postService.postCard.subscribe(
         (response: Post) => {
            console.log(response);
         }
      )
  }

}
