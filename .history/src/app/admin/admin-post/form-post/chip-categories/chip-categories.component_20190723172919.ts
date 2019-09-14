import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service/post-service.service';

export interface Category{ _id: string };

@Component({
  selector: 'app-chip-categories',
  templateUrl: './chip-categories.component.html',
  styleUrls: ['./chip-categories.component.scss']
})
export class ChipCategoriesComponent implements OnInit {

   categories: Category[] = [];

  constructor(
     private postService: PostService
  ) { }

  ngOnInit() {

      this.postService.getCategories().subscribe(
         (response: Category[]) => {
            if(response) this.categories = response;
            else this.categories = null;
         }
      )
  }

}
