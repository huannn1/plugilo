import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth'
// import * as firebase from 'firebase';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    // private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {

  }

  login() {
    this.authService.login();
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
