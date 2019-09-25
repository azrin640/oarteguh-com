import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Contact } from 'src/app/interface/contact';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

   useForm = true;
   contactForm = new FormGroup({
      name     : new FormControl('', Validators.required),
      phone    : new FormControl('', Validators.required),
      email    : new FormControl('', Validators.required),
      comment  : new FormControl('', Validators.required)
   });
   contact: Contact;

  constructor(
     private contactService: ContactService,
     public snackBar: MatSnackBar
  ) {
   }

  ngOnInit() {
  }

  get name(){ return this.contactForm.get('name')}
  get phone(){return this.contactForm.get('phone')}
  get email(){ return this.contactForm.get('email')}
  get comment(){ return this.contactForm.get('comment')}

  submitContact(){
     this.contactService.saveContact(this.contactForm.value).subscribe(
        (response: Contact) => { 
            this.contact = response;   }, //
         error => this.snackBar.open('Form submission error, please try again', 'X', {duration: 10000, panelClass: 'warn'})
     )
  }
}
