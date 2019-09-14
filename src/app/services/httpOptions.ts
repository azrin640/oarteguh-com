import { HttpHeaders } from '@angular/common/http';

export const jwtToken = localStorage.getItem('token');

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'jwtoken': jwtToken
  })
};