import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile-service/profile-service.service';
import { PostService } from '../services/post-service/post-service.service';
import { User } from '../interface/user';
import { Post } from '../interface/post';
import { trigger, transition, useAnimation } from '@angular/animations';
import { xEnter, iconButtonEnter, imageEnter } from '../animations/anim-fn';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
   trigger('xEnter', [
      transition(':enter', [
         useAnimation(xEnter)
   ]) ]),
   trigger('iconButtonEnter', [
      transition(':enter', [            
         useAnimation(iconButtonEnter)
   ]) ]),
   trigger('imageEnter', [
      transition(':enter', [            
         useAnimation(imageEnter)
   ]) ])   
]
})
export class PostsComponent implements OnInit {

   postsExist: boolean = true;
   posts: Post[];
   postId: Post;
   imagePost: Post;
   imageEntered: boolean = false;
   readMoreClick: boolean = false;
   profile: User;

  constructor(
   private profileService: ProfileService,
   private postService: PostService
  ) { }

  ngOnInit() {

      this.profileService.profile.subscribe(
         (response: User) => {
            if(response && response.id){
               this.profile = response;
            }
            else this.profile = null;
      });  
      
      this.postService.getAllPost().subscribe(
         (response: Post[]) => {
            this.posts = response;
         }
      );
   }

   mouseEnterCard(event)
   {
      this.postId = event.target.id;
   }

   mouseEnterImage(event)
   {
      this.imagePost = event.target.id;
      this.imageEntered = true;     
   }

   mouseLeaveImage()
   {      
      this.imageEntered = false;         
   }

}
