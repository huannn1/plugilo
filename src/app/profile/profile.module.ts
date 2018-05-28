import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { reducers, effects } from './store';

// Components
import * as fromComponents from './components';

// Services
import * as fromServices from './services';

// Routes
import { UserRoutes as routes } from './profile.routes';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    ...fromComponents.components
  ],
  providers: [
    ...fromServices.services
  ]
})
export class ProfileModule { }