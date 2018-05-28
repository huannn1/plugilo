import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatisticsRoutes as routes } from './statistics.routes';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StatisticsComponent
  ]
})
export class StatisticsModule { }
