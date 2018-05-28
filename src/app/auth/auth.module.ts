import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthRoutes as routes } from './auth.routes';
import { SignupComponent } from './components/signup/signup.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    CallbackComponent
  ],
  exports: [
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule { }
