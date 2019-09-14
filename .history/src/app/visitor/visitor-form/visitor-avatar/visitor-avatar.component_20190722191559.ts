import { Component, OnInit, AfterContentInit } from '@angular/core';
import { VisitorService } from 'src/app/services/visitor-service/visitor-service.service';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visitor-avatar',
  templateUrl: './visitor-avatar.component.html',
  styleUrls: ['./visitor-avatar.component.scss']
})
export class VisitorAvatarComponent implements OnInit, AfterContentInit {

   avatars = {
      boys: [ 'avatars/boy', 'avatars/boy-1', 'avatars/boy-2', 'avatars/boy-3', 'avatars/boy-4', 'avatars/boy-5' ],
      girls: [ 'avatars/girl', 'avatars/girl-1', 'avatars/girl-2', 'avatars/girl-3', 'avatars/girl-4', 'avatars/girl-5' ]
   };
   formAvatarGroup;
   visitor: User;
   loading: boolean = false;

  constructor(
     private visitorService: VisitorService
  ) {
         this.formAvatarGroup = new FormGroup({
            image: new FormControl('')
         });
   }

  ngOnInit() {

      this.loading = true;
      this.visitorService.visitorProfile.subscribe(
         (response: User) => {
            if(response) this.visitor = response;
            else this.visitor = null;
         } 
      );
  }

  get imageCtrl() { return this.formAvatarGroup.get('image')};

  ngAfterContentInit(){
     this.loading = false;
  }

  updateVisitor()
  {
      this.visitorService.visitorSource.next({ name: this.visitor.name, image: this.imageCtrl.value });
  }

}
