import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterState, RouterStateSnapshot } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

// Routes
import { routes } from './app.routes';

// Modules
import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// import { JwtModule } from '@auth0/angular-jwt';
// import { AuthService } from './auth/auth.service';
import { AppErrorHandler } from './core/errors/app-error-handler';
import { appReducers, metaReducers, CustomSerializer } from './app.reducers';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

// Not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { HomeComponent } from './home/components/home/home.component';
import { BootstrapallComponent } from './home/components/bootstrapall/bootstrapall.component';
import { HighlightComponent } from './home/components/highlight/highlight.component';
import { ListComponent } from './home/components/list/list.component';
import { ConnectDemoComponent } from './home/components/connect-demo/connect-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BootstrapallComponent,
    HighlightComponent,
    ListComponent,
    ConnectDemoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([]),

    BrowserModule,

    // HomeModule,
    LayoutModule,
    CoreModule,
    SharedModule,
    AuthModule,
    // Dev
    environment.production ? [] : StoreDevtoolsModule.instrument()

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ['localhost:4200'],
    //     blacklistedRoutes: ['localhost:4200/auth/']
    //   }
    // })
  ],
  providers: [
    // AngularFireAuth,
    // AuthService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
