import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile-service/profile-service.service';
import { User } from '../model/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

   profile: User;

  constructor(
     private profileService: ProfileService
  ) { }

  ngOnInit() {

      this.profileService.profile.subscribe(
         (response: User) => {
            this.profile = response;
         }
      )
  }

}
