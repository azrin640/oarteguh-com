import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
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
