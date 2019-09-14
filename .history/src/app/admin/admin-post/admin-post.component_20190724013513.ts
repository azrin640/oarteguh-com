import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.scss']
})
export class AdminPostComponent implements OnInit {

   profile: User;

  constructor(
     private profileService: ProfileService
  ) { 
         this.profileService.profile.subscribe(
            (response: User) => {
               if(response && response.id) this.profile = response;
               else this.profile = null;
            }
         )

  }

  ngOnInit() {
  }

}
