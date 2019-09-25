import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../configurations/services/profile-service/profile-service.service';
import { User } from '../configurations/model/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
