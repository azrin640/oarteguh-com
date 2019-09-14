import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { useAnimation, transition, trigger } from '@angular/animations';
import { fadeOut } from '../animations/fadeInOut';




@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
  animations: [

      trigger('fadeOut', [
         transition('* => void', [
            useAnimation(fadeOut, {
               params: {
                  opacity: 0,
                  time: '5s'
               }     })    ])    ])  //end trigger

   ]
})
export class NavigationsComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    opened: boolean = true;
    sideNavIcon: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  closeSidenav()
  {
      this.sideNavIcon? this.sideNavIcon = false: this.sideNavIcon = true;
  }

}
