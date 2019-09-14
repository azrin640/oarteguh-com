import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interface/user';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [

   trigger('fadeIn', [
      state('true', style({ opacity: 0 })),
      state('false', style({ opacity: 1 })),
      transition('true <=> false', animate(5000))  ])  //end trigger
   ]

})
export class LoginComponent implements OnInit {

   pageLoad: boolean = false;
   loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', Validators.required)
   });

   @Output() isLoggedIn = new EventEmitter<Boolean>();

  constructor(
     private authService: AuthService,
     private profileService: ProfileService,
     public snackBar: MatSnackBar,
     private router: Router
  ) { }

  ngOnInit() {

      this.pageLoad = true;

  }

  login()
  {
     this.authService.login(this.loginForm.value).subscribe(
         (response: User) => {
            if(response && response.id){

               localStorage.setItem('token', response.token);
               this.profileService.isLoggedIn();
               this.router.navigate(['/admin/serial']);
               this.snackBar.open('Login successful, You are currently logged in', 'X', { duration: 10000, panelClass: 'gold-theme'} );         
               
            } 
         },
         error => this.snackBar.open(error, 'X', { duration: 10000, panelClass: 'red-theme' })
     )
  }

}
