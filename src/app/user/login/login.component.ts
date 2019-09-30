import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/configurations/services/auth/auth.service';
import { User } from 'src/app/configurations/interface/user';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/configurations/services/profile-service/profile-service.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { SafeHtml, DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [

   trigger('fadeIn', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0.5 })),
      transition('true <=> false', animate(7000))  ])  //end trigger
   ]

})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', Validators.required)
   });
   auth: SafeHtml;


   @Output() isLoggedIn = new EventEmitter<Boolean>();

  constructor(
     private profileService: ProfileService,
     public snackBar: MatSnackBar,
     private sanitizer: DomSanitizer,
     private router: Router
  ) { }

  ngOnInit() {

  }

  login()
  {
     this.profileService.login(this.loginForm.value);
  }

  signInLinkedin(){
     this.profileService.startLinkedin().subscribe(
        (response: any) => {
           window.location.href = response;
        }
     )
  }

}
