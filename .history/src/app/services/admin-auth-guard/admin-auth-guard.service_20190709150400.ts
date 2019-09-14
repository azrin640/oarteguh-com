import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProfileService } from '../profile-service/profile-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(
    private profileService: ProfileService
  ) { }

   canActivate()
   {  let status= this.profileService.getLoggedStatus();
      if(status.user && status.user.admin) return true;
      else return false;   }  //

}