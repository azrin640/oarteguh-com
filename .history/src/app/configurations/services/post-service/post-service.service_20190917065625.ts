import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Post } from 'src/app/configurations/interface/post';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { httpOptions } from '../httpOptions';
import { SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   post: Post;
   title: Post['title'];
   subtitle: Post['subtitle'];
   categories: Post['categories'];
   content: SafeHtml;
   image: any;
   tags: Post['tags'];   

   postSource = new BehaviorSubject(this.post);
   postCard = this.postSource as Observable<Post>;

   titleSource = new BehaviorSubject(this.title);
   titleCard = this.titleSource as Observable<Post['title']>;

   subtitleSource = new BehaviorSubject(this.subtitle);
   subtitleCard = this.subtitleSource as Observable<Post['subtitle']>;

   catSource = new BehaviorSubject(this.categories);
   postCats = this.catSource as Observable<Post['categories']>;

   contentSource = new BehaviorSubject(this.content);
   postContent = this.contentSource as Observable<SafeHtml>;

   tagsSource = new BehaviorSubject(this.tags);
   postTags = this.tagsSource as Observable<Post['tags']>;

   imageSource = new BehaviorSubject(this.image);
   postImage = this.imageSource as Observable<any>;


   constructor(
      private http: HttpClient
   ) { }

   setPostSourceValue(id)
   {
         this.postSource.next(id);
   }

   getCategories(){
      return this.http.get('/api/posts/categories')
            .pipe(
               map((categories: any) => {
                  this.catSource.next(categories);
                  return categories;
               }),
               catchError(error => throwError(error)));
   }

   getTags(){
      return this.http.get('/api/posts/tags')
            .pipe(
               map((tags: any)=> {
                  this.tagsSource.next(tags);
                  return tags;
               }),
               catchError(error => throwError(error))
            );
   }

   uploadFileToDb(file){
      const form = new FormData;
      form.set('name', file);

      const req = new HttpRequest('POST', '/api/posts/post/image/upload', form, {
         reportProgress: true
      });

      return this.http.request(req).pipe(
         catchError(error => throwError(error)));
   }

   newPost(post){
      return this.http.post('/api/posts/post/new', post, httpOptions)
      .pipe( catchError(error => throwError(error)) );
   }

   getAllPost(){
      return this.http.get('/api/posts')
         .pipe( catchError(error => throwError(error)) );
   }

   getPost(id){
      return this.http.post('/api/posts/post', id).pipe( 
         catchError(error => throwError(error)),
         map(post => {
            this.postSource.next(post);
            return post;
         })
      );
   }

   newPostComment(comment){
      return this.http.post('/api/posts/post/comment/new', comment, httpOptions).pipe(
         catchError(error => throwError(error))
      );
   }

}