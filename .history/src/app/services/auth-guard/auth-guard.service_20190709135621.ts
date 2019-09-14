import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ProfileService } from '../profile-service/profile-service.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  canActivate(routes, state: RouterStateSnapshot)
  {
      let user = this.profileService.profile.pipe(
         map((profile) => { return profile }));      
      console.log(user);
      if(user)  return true;
      else return false;
  }
}
