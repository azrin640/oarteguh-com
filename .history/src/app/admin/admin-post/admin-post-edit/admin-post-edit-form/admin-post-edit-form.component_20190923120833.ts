import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { map, tap, last } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-admin-post-edit-form',
  templateUrl: './admin-post-edit-form.component.html',
  styleUrls: ['./admin-post-edit-form.component.scss']
})
export class AdminPostEditFormComponent implements OnInit {

   post: Post;
   formPost: FormGroup;
   content: string;
   selectedImage;
   uploading: boolean = false;
   uploaded: boolean = false;
   uploadPct;


  constructor(
   private route: ActivatedRoute,
   private postService: PostService,
   private snackBar: MatSnackBar
  ) { 

         this.formPost = new FormGroup({
            title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            subtitle: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            image: new FormControl(''),
            slug: new FormControl('', [ Validators.required ])
         });
  }

  ngOnInit() {

      this.route.paramMap.subscribe(
         (response: any) => {
            if(response.params.id) this.getPost(response.params.id);
            else this.snackBar.open('Unable to get post, please refresh browser and try again', 'X', { duration: 10000, panelClass: 'red-style'})
         }
      )
  }

  selectedFile(event){
     let file = event.target.files[0];
     this.postService.imageSource.next(file);
     this.selectedImage = file;
  }

   uploadFile(){
      let file = this.selectedImage;
      const upload = this.postService.uploadFileToDb(file)
         .pipe(
            map(event => this.getEventMessage(event, file)),
            tap(event => { return event }),
            last()
         )
         .subscribe(
            (response: any) => {
               console.log(response);
               if(response && response.image){
                  this.uploaded = true;
                  this.formPost.get('image').setValue({ image: response.image } );
                  this.uploading = true;
                  this.snackBar.open('Picture successfully uploaded.', 'X', { duration: 10000, panelClass: 'pink-style'});
               }
               else this.snackBar.open('Unable to upload picture, please try again.', 'X', { duration: 10000, panelClass: 'red-style'});

            },
            (error => {
                  this.snackBar.open('Error during upoload: ' + error, 'X', { duration: 10000, panelClass: 'red-style'})
               })
         )
   }

   /** Return distinct message for sent, upload progress, & response events */
   private getEventMessage(event: HttpEvent<any>, file: File) {
      switch (event.type) {

         case HttpEventType.UploadProgress:
            let progress = {
               loaded: event.loaded,
               total: event.total
            };
            this.uploadPct = event.loaded / event.total * 100;
            return progress;

         case HttpEventType.Response:
            return event.body;

      }
   }

   getPost(id){
      this.postService.getPost(id).subscribe(
         (response: Post) => {
            console.log(response);
            this.formPost.setValue({ 
               title: response.title,
               subtitle: response.subtitle,
               content: response.content,
               image: response.image,
               slug: response.slug
               });
               this.post = response;
         }
      )
   }

   updateTitleSource(){
      let title = this.formPost.get('title').value;
      this.postService.titleSource.next(title);
   }

   updateSubtitleSource(){     
      let subtitle = this.formPost.get('subtitle').value;
      this.postService.subtitleSource.next(subtitle);
   }

   updateContentSource(event){
      this.postService.contentSource.next(event.target.innerText);
   }

   createSlug(){
      let post = this.post;
      let slug = `post/${post.owner.name}/${post.id}/${post.title}`
            .split(' ')
            .join('-');
         this.formPost.setValue({
            slug: slug
         });
   }

   updatePost(){
      let post = this.formPost.value;
      post.categories = this.post.categories;
      post.content = this.content;
      post.tags = this.post.tags;
      console.log(post);

   }



}
