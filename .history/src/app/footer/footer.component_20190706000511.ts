import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ProfileService } from '../services/profile-service/profile-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   
   profile: User;
   agents = [
      { country: 'malaysia', telegram: 'strongarrowmalaysia'},
      { country: 'singapore', telegram: 'neezamhm'}
   ];
   location: string;
   contact;
   useForm: boolean = false;


  constructor( 
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer,
    private router: Router,
    private profileService: ProfileService,
    public snackBar: MatSnackBar
  ){ }

  ngOnInit() {
      this.profileService.profile.subscribe((response: User) => this.profile = response);
      this.profileService.location.subscribe(response => {

         let agents = this.agents;
         function findTelegram(country){return agents.find((agent) => { 
            return agent.country === country; }); };

         var localAgent;
         switch(response){
            case 'MY': localAgent = findTelegram('malaysia'); break;
            case 'SG': localAgent = findTelegram('singapore'); break;
            default  : localAgent = findTelegram('malaysia');
         }
         
         this.contact = localAgent;
      });

   }

   useContactForm()
   {
      this.useForm ? this.useForm=false : this.useForm=true;
   }

  authenticateProduct()
  {
     this.router.navigate(['products/product/strong-arrow/authenticate'], { fragment: 'top' });
  }  
}
