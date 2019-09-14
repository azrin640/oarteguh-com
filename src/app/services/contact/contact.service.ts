import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
     private http: HttpClient
  ) { }

  saveContact(form)
  {  return this.http.post('/api/contact/form/save', form).pipe(
         catchError(error => throwError(error))    )} //

}
