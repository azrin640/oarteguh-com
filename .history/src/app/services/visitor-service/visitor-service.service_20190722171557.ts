import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

   visitor;

   visitorSource = new BehaviorSubject(this.visitor);
   profile = this.visitorSource as Observable<User>;

  constructor() { }
}
