import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NotFoundError } from './core/errors/not-found-error';
import { Observable } from 'rxjs/Observable';
import { AppError } from './core/errors/app-error';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // constructor(private auth: AuthService){
  //   auth.handleAuthentication();
  // }

  constructor(private store: Store<any>){
    // this.store.dispatch()
  }
}
