import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post-service/post-service.service';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.scss']
})
export class PreviewPostComponent implements OnInit {

   profile: User;
   content: boolean = false;
   sidebar: boolean = true;
   title: Post['title'];
   imagePreview;

  constructor(
     private postService: PostService,
     private profileService: ProfileService
  ) {
         this.profileService.profile.subscribe(
            (response) => { this.profile = response }
         )

         this.postService.titleCard.subscribe(
            (response) => { this.title = response }
         );

         this.postService.postImage.subscribe(
            (response: any) => { 
               
               if(response && response.name){
                  console.log(response);
                  // Image preview
                  const reader = new FileReader();
                  reader.onload = () => {
                     this.imagePreview = reader.result;
                  }
                  reader.readAsDataURL(response);
                  this.content = true;
               }
               else this.imagePreview = null;
            });

   }

  ngOnInit() {
  }

}
