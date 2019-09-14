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
    private authService: AuthService
  ) { }

   canActivate()
   {  let user = this.authService.currentUser;
      if(user && user.admin) return true;
      else return false;   }  //

}