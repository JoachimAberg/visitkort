import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StateService {
  private _visaAdressTabb: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public readonly visaAdressTabbObservable: Observable<boolean> = this._visaAdressTabb.asObservable();

  constructor() {

  }

  public visaAdressTabb(event) {
    this._visaAdressTabb.next(true);
    event.stopPropagation();
  }

  public doljAdressTabb(event) {
    this._visaAdressTabb.next(false);
    event.stopPropagation();
  }

  public toggleAddressTabb(event) {
    this._visaAdressTabb.next(!this._visaAdressTabb.getValue());
    event.stopPropagation();
  }

}
