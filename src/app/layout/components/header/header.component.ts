import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // user: firebase.User;
  user: any = null;
  public abc: any;
  private hello: any;

  constructor(
    // private afAuth: AngularFireAuth,
    public authService: AuthService) {
    // afAuth.authState.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    let self = this;
    if (this.authService.userProfile) {
      this.user = this.authService.userProfile;
    } else {
      this.authService.getProfile(function(err, profile){
        self.user = profile;
      });
    }
  }

  logout() {
    // this.afAuth.auth.signOut();
    this.authService.logout();
  }
}
