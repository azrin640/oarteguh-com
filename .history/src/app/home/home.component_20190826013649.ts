import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { xEnter, iconButtonEnter, imageEnter } from '../animations/anim-fn';
import { Post } from '../interface/post';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile-service/profile-service.service';
import { User } from '../interface/user';
import { PostService } from '../services/post-service/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

export class HomeComponent implements OnInit {

   postsExist: boolean = true;
   posts: Post[];
   postId: Post;
   imagePost: Post;
   imageEntered: boolean = false;
   readMoreClick: boolean = false;
   profile: User;

  constructor(
   private router: Router,
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
            console.log(response);
            this.posts = response;
         }
      )
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
