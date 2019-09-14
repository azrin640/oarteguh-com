import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { transition, trigger, state, animate, style } from '@angular/animations';
import { AppRoutingModule } from '../app-routing.module';
import { Routes } from '@angular/router';
import { routes } from '../app-routing.module';


@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
  animations: [

      trigger('fadeOut', [
         state('true', style({ opacity: 0.5 })),
         state('false', style({ opacity: 1 })),
         transition('true <=> false', animate(5000))  ])  //end trigger

   ]
})
export class NavigationsComponent {

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
         map(result => result.matches)
      );
   opened: boolean = true;
   sideNavIcon: boolean = false;
   links: Routes = routes;

  constructor(
     private breakpointObserver: BreakpointObserver
     ) { }

  closeSidenav()
  {
      this.sideNavIcon? this.sideNavIcon = false: this.sideNavIcon = true;
  }

}
