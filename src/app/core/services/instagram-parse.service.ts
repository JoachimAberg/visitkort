import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Nod} from '../models/nod';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class InstagramParseService {
  feedDoc: Document;
  scriptElements: NodeListOf<HTMLScriptElement>;
  private _noder: BehaviorSubject<Nod[]>;

  get noder(): Observable<Nod[]> {
    return this._noder.asObservable();
  }
  constructor(private http: HttpClient) {

    this._noder = <BehaviorSubject<Nod[]>>new BehaviorSubject([]);
    this.getFeed().subscribe(
    data => {
      this.feedDoc = new DOMParser().parseFromString(data, 'text/html');
      this.scriptElements = this.feedDoc.getElementsByTagName('script');
      if (this.scriptElements) {
        for (let _i = 0; _i < this.scriptElements.length; _i++) {
          if (this.scriptElements.item(_i).text.indexOf('window._sharedData') !== -1) {

            const test =
              JSON.parse(this.scriptElements.item(_i).text.substring(21, this.scriptElements.item(_i).text.length - 1))
              .entry_data.ProfilePage[0].user.media.nodes;
            console.log(test);

            this._noder.next(test);
          }
        }
      }
    },
      err => {
        console.log('Something went wrong!');
        console.log(err);
      }
    );
  }


  private getFeed(): Observable<any> {
    const options = {responseType: 'text' as 'text'};
    return this.http.get('https://www.instagram.com/joachimaberg/', options);
  }

}
