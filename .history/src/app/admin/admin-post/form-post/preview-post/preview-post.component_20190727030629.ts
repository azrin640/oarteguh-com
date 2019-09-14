import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { PostService } from 'src/app/services/post-service/post-service.service';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.scss']
})
export class PreviewPostComponent implements OnInit {

   sidebar: boolean = true;
   title: Post['title'];
   imagePreview;

  constructor(
     private postService: PostService
  ) {
         this.postService.titleCard.subscribe(
            (response) => { this.title = response }
         );

         this.postService.postImage.subscribe(
            (response: any) => { 
               console.log(response);
               // let file = response;
               // // Image preview
               // const reader = new FileReader();
               // reader.onload = () => {
               //    this.imagePreview = reader.result;
               // }
               // reader.readAsDataURL(response);}
         );

   }

  ngOnInit() {
  }

}
