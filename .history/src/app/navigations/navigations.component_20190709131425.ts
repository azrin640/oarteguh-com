import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { transition, trigger, state, animate, style } from '@angular/animations';
import { Routes, Route, Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { ProfileService } from '../services/profile-service/profile-service.service';
import { User } from '../model/user';

export interface Link { path: string, data: { name: string, icon: string, tooltip: string, type: string } }
export interface Menu { public: [Link], user: Link[], admin: Link[] }

@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
  animations: [

      trigger('fadeOut', [
         state('true', style({ opacity: 0.5 })),
         state('false', style({ opacity: 1 })),
         transition('true <=> false', animate(2000))  ])  //end trigger

   ]
})
export class NavigationsComponent implements OnInit{   

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
         map(result => result.matches)
      );   
   sideNavIcon: boolean = true;
   opened: boolean = true;
   links: Menu;
   profile: User;

  constructor(
     private breakpointObserver: BreakpointObserver,
     private router: Router,
     private profileService: ProfileService
     ) { }

   ngOnInit()
   {  
      
      let pages = routes.reduce((acc, value) => {                        
            if(value.data.type === 'public') acc.public.push(value);
            else if(value.data.type === 'user') acc.user.push(value);
            else if(value.data.type === 'admin') acc.admin.push(value);
         return acc;
      }, {public:[], user: [], admin: []});
      this.links = pages as Menu;

      this.profileService.profile.subscribe(
         (response: User) => {
            this.profile = response;
         }
      )


   }

  toggleSidenav()
  {
      this.sideNavIcon? this.sideNavIcon = false: this.sideNavIcon = true;
  }

  itemClicked()
  {
     this.sideNavIcon=true;
  }

  backToHome()
  {
      this.router.navigate([''], { fragment: 'top' });
  }

}
