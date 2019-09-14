import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProfileService } from '../profile-service/profile-service.service';
import { User } from 'src/app/interface/user';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

   canActivate()
   {  let status= this.profileService.getLoggedStatus();
      if(status.user && status.user.admin) return true;
      else return false;   }  //

}