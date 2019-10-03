import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/configurations/services/profile-service/profile-service.service';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent implements OnInit {

   userLinkedin;

  constructor(
     private route: ActivatedRoute,
     private profileService: ProfileService
  ) { }

  ngOnInit() {

      this.route.queryParamMap.subscribe(
         (response: any) => {
            console.log(response);
            if(response.params.code && response.params.state){ 
               this.profileService.approvedLinkedin(response.params).subscribe(
                  (response: any) => {
                     this.userLinkedin = response;
                  }
               )            
            }
         }
      )
  }

}
