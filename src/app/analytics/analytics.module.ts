// angular
import { NgModule } from '@angular/core';

// lib
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

// module
import { AnalyticsService } from './services/analytics.service';
import { ANALYTICS_PROVIDERS } from '.';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    Angulartics2Module.forRoot([
      Angulartics2GoogleAnalytics
    ])
  ],
  providers: [
    ...ANALYTICS_PROVIDERS
  ]
})
export class AnalyticsModule {

}
