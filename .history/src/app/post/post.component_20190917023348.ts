import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../configurations/services/post-service/post-service.service';
import { Post } from '../configurations/interface/post';
import { MatSnackBar } from '@angular/material';
import { ProfileService } from '../configurations/services/profile-service/profile-service.service';
import { User } from '../configurations/model/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

   post: Post;
   profile: User;

  constructor(
     private router: ActivatedRoute,
     private postService: PostService,
     private profileService: ProfileService,
     public snackBar: MatSnackBar
  ) { }

  ngOnInit() {

      this.router.paramMap.subscribe(
         (response: any) => {
            let postId = response.params.id;
            if(postId) this.getPost(postId);
            else this.snackBar.open('Post does not exist', 'X', { duration: 10000, panelClass: 'red-style'});
         }
      );

      this.profileService.profile.subscribe(
         (response: User) => {
            if(response && response._id) this.profile = response;
            else this.profile = null;
         }
      )
  }

  getPost(id){
     this.postService.getPost({ id }).subscribe(
        (response: Post) => {
           console.log(response);
           this.post = response;
        }
     )
  }

  likePost(event){
     let profile = this.profile;
     if(profile && profile._id){
        console.log(profile);
     }
     else this.snackBar.open('Please Login to Like post', 'X', { duration: 10000, panelClass: 'red-style' });
  }

  commentPost(event){
      let profile = this.profile;
      if(profile && profile._id){
         console.log(profile);
      }
      else this.snackBar.open('Please Login to Comment on post', 'X', { duration: 10000, panelClass: 'red-style' });
   }

}