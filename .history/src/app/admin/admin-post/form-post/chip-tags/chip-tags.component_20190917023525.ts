import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { MatChipInputEvent } from '@angular/material';

export interface Tag{ _id: string };

@Component({
  selector: 'app-chip-tags',
  templateUrl: './chip-tags.component.html',
  styleUrls: ['./chip-tags.component.scss']
})
export class ChipTagsComponent implements OnInit {

   visible = true;
   selectable = true;
   removable = true;
   addOnBlur = true;
   readonly separatorKeysCodes: number[] = [ENTER, COMMA];

   tags: Tag[] = [];

  constructor(

      private postService: PostService

  ) { }

  ngOnInit() {
      this.postService.getTags().subscribe(
         (response: any) => {
            if(response) this.tags = response;   
            else this.tags = null;
         }
      );
  }

   add(event: MatChipInputEvent): void {
      const input = event.input;
      const value: any = event.value;

      // Add our fruit
      if ((value || '').trim()) {
         this.tags.push(value);
         this.updateSource()
      }

      // Reset the input value
      if (input) {
         input.value = '';
      }
   }

   remove(tag: Tag): void {
      const index = this.tags.indexOf(tag);

      if (index >= 0) {
         this.tags.splice(index, 1);
         this.updateSource();
      }
   }

   updateSource(){
      let tags: any = this.tags;
      this.postService.tagsSource.next(tags);
   }
}
