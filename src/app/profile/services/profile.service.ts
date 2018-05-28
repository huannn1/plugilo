import { Injectable } from '@angular/core';
import { CustomList } from '../models/custom-list.model';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getCustomLists(): Observable<CustomList[]> {
    return this.http
      .get<CustomList[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
