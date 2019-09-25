import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../configurations/services/profile-service/profile-service.service';
import { User } from '../configurations/model/user';
import { PostService } from '../configurations/services/post-service/post-service.service';
import { Post } from '../configurations/interface/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

   profile: User;
   post: Post;

  constructor(
     private profileService: ProfileService,
     private postService: PostService
  ) { }

  ngOnInit() {

      this.profileService.profile.subscribe(
         (response: User) => {
            this.profile = response;
         }
      );

      this.postService.postCard.subscribe(
         (response) => {            
            this.post = response;
         }
      )
  }

}
