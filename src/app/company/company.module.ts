import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './components/company/company.component';
import { RouterModule } from '@angular/router';
import { CompanyRoutes as routes } from './company.routes';
import { SearchModule } from '../search/search.module';
import { StatisticsModule } from '../statistics/statistics.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CompanyComponent
  ]
})
export class CompanyModule { }
