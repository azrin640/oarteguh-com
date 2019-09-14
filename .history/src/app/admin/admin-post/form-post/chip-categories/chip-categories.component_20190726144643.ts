import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service/post-service.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Post } from 'src/app/interface/post';

export interface Category{ _id: string };

@Component({
  selector: 'app-chip-categories',
  templateUrl: './chip-categories.component.html',
  styleUrls: ['./chip-categories.component.scss']
})
export class ChipCategoriesComponent implements OnInit {

   visible = true;
   selectable = true;
   removable = true;
   addOnBlur = true;
   readonly separatorKeysCodes: number[] = [ENTER, COMMA];

   categories: Category[] = [];

  constructor(
     private postService: PostService
  ) { }

  ngOnInit() {

      this.postService.getCategories().subscribe(
         (response: any) => {
            if(response){ 
               this.categories = response;
               this.postService.catSource.next(response as Post['categories']);
            }
            else this.categories = null;
         }
      );
  }

   add(event: MatChipInputEvent): void {
      
      const input = event.input;
      const value = event.value;
      console.log(value);

      if ((value || '').trim()) {         
         // this.categories.push(value)
      }

      if (input) {
         input.value = '';
      }
   }

   remove(category: Category): void {
      const index = this.categories.indexOf(category);

      if (index >= 0) {
         this.categories.splice(index, 1);
      }
   }

}
