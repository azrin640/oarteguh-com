import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

   visitor;

   userSource = new BehaviorSubject(this.visitor);
   profile = this.userSource as Observable<User>;

  constructor() { }
}
