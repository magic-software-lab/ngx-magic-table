declare const PR: any;

import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Injectable()
export class PrettifyWrapperService {

  private timer;
  private afterCreateComponentSubscribe: Subscription;

  constructor() {
      this.timer = Observable.timer(1);
   }

  public prettyPrint() {
    this.afterCreateComponentSubscribe = this.timer.subscribe(t => this.doPrettyPrint());
  }


  private doPrettyPrint() {
    PR.prettyPrint();
    this.afterCreateComponentSubscribe.unsubscribe();
  }

}
