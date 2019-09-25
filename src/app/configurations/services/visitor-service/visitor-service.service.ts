import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/configurations/interface/user';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

   visitor;

   visitorSource = new BehaviorSubject(this.visitor);
   visitorProfile = this.visitorSource as Observable<User>;

  constructor() { }
}
