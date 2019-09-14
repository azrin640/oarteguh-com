import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgmEditorServiceService {

   content: string;

   contentSource = new BehaviorSubject(this.content);
   contentFeed = this.contentSource as Observable<string>;

  constructor() { }
}
