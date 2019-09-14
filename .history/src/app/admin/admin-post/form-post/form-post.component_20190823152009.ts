import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post-service/post-service.service';
import { Post } from 'src/app/interface/post';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpUploadProgressEvent, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, last, catchError } from 'rxjs/operators';
import { Category } from './chip-categories/chip-categories.component';
import { editorConfig } from 'src/app/services/post-service/editor-config';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgmEditorService } from 'src/app/ngm-editor/service/ngm-editor-service.service';



@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

   formNewPost: FormGroup;
   profile: User;
   created: number = Date.now();
   titleSlug: string;   
   fileName: string;
   selectedImage;
   uploadImage: boolean = false;
   uploading: boolean = false;
   uploadPct = 0;
   uploaded: boolean = false;
   categories: Post['categories'];
   tags: Post['tags'];
   sidebar: boolean = false;
   editorConfig: AngularEditorConfig;

   content: string;

  constructor(

      private profileService: ProfileService,
      private postService: PostService,
      public snackBar: MatSnackBar,
      private editorService: NgmEditorService

  ) {    
         this.editorConfig = editorConfig;
         const profile = this.profileService.profile.subscribe(
            (response: User) => {
               if(response && response.id) this.profile = response;
               else this.profile = null;
            }
         );

         this.formNewPost = new FormGroup({
            title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            subtitle: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            content: new FormControl('', [ Validators.required ]),
            image: new FormControl(''),
            slug: new FormControl('', [ Validators.required ])
         });

         this.postService.postCats.subscribe(
            (response: any) => {                          
               this.categories = response;               
         } );

         this.postService.postTags.subscribe(
            (response: any) => {                       
               this.tags = response;                   
         } );

         this.editorService.contentFeed.subscribe(
            (response: any) => {
               console.log(response);
            }
         )
   }

  ngOnInit() {


  }

  get titleCtrl(){ return this.formNewPost.get('title') };
  get subtitleCtrl(){ return this.formNewPost.get('subtitle') };
  get contentCtrl(){ return this.formNewPost.get('content') };
  get imageCtrl(){ return this.formNewPost.get('image') };
  get slugCtrl(){ return this.formNewPost.get('slug') };

   createSlug(){     
      let title = this.titleCtrl.value.toLowerCase().split(' ').join('-');
      let date = Date.now();
      let name = this.profile.name.toLowerCase().split(' ').join('-');
      let slug = `/${name}/${date}/${title}`;
      this.slugCtrl.setValue(slug);
   }

   updateTitleSource(event){
      let value = event.target.value;
      this.postService.titleSource.next(value);
   }

   updateSubtitleSource(event){
         let value = event.target.value;
         this.postService.subtitleSource.next(value);
      }

   updateContentSource(event){
      let value = this.contentCtrl.value;
      console.log(value);
      this.postService.contentSource.next(value);
   }

   enterEvent(event){  
      console.log(event);
      if(event.keyCode === 13){

         let selection = document.getSelection();
         console.log(selection);

         // Get range from selection which specify anchorOffset and focusOffset value
         let ranges: Range[] = [];
         for(let i = 0; i < selection.rangeCount; i++) {
            ranges[i] = selection.getRangeAt(i);
         };
         let range = ranges[0];
         console.log(range);

         let newElement = document.createElement('br') as HTMLElement;
         range.insertNode(newElement); 

      }
         // let elementId = this.id;
         // ++ elementId;
         // this.id = elementId;
   
         // // Call fn to get and update selected content object
         // let selected = this.contentSelected();  
         // selected.button = { id: command, color: 'primary' };        
         // selected.element =  { id: `${command}-${elementId}`}; 
   
         // // Call fn to generate a new element i.e. newElement
         // this.createElement(selected, command);
   }

   selectedFile(event){
      const file = event.target.files[0];     
      
      if(file && file.name){
         this.uploading = true;
         this.uploaded = false;
         this.uploadPct = 0;
            let fileExt = file.name.split('.');
            if(fileExt[1] === 'jpg' || 'png' || 'jpeg' ){
               this.selectedImage = file;
               this.postService.imageSource.next(file);
            }
            else this.snackBar.open('Please select an image file with png or jpg or jpeg extension', 'X', { duration: 10000, panelClass: 'red-theme' });
      }
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
               if(response && response.image){
                  this.uploaded = true;
                  this.imageCtrl.setValue(response.image);
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

   showProgress(message){
      return message;
   }

   submitPost(){
      let form = this.formNewPost.value;
      form.categories = this.categories;
      form.owner = this.profile._id;
      form.tags = this.tags;
      this.postService.newPost(form).subscribe(
         (response: Post) => {
            if(response && response._id) this.snackBar.open('Post submission is successfull.', 'X', {duration: 10000, panelClass: 'pink-style'});
            else this.snackBar.open('Post submission fail. Please try again', 'X', {duration: 10000, panelClass: 'red-style'});
         },
         error => this.snackBar.open('Post submission error: ' + error, 'X', {duration: 10000, panelClass: 'red-style'})
      )

   }
  



  
}
