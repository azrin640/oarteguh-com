import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/configurations/services/profile-service/profile-service.service';
import { User } from 'src/app/configurations/model/user';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

   loginForm: FormGroup;

  constructor(
      private profileService: ProfileService,
      public snackBar: MatSnackBar
  ) { 

      this.loginForm = new FormGroup({
         email: new FormControl('', [Validators.required, Validators.email])
      });

  }

  ngOnInit() {
  }

  login(){
      const email = this.loginForm.get('email').value;
      this.profileService.forgotPassword(email).subscribe(
         (response: any) => console.log(response),
         // this.snackBar.open('A password reset link has been emailed to your registered email.', 'X', { duration: 10000, panelClass: 'pink-style' }),
         (error => this.snackBar.open(`Error: ${error}`, 'X', { duration: 10000, panelClass: 'red-style' }))
      )
  }

}
