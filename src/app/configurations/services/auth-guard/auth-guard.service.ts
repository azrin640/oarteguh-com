import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ProfileService } from '../profile-service/profile-service.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/configurations/model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

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
      let user = this.profileService.getLoggedStatus();
      if(!user.expired) return true;
      else return false;
  }
}
