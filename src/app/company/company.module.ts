import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './components/company/company.component';
import { RouterModule } from '@angular/router';
import { CompanyRoutes as routes } from './company.routes';
import { SearchModule } from '../search/search.module';
import { StatisticsModule } from '../statistics/statistics.module';
import { ProductsComponent } from './components/products/products.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { UsersComponent } from './components/users/users.component';
import { CompanyWebComponent } from './components/company-web/company-web.component';
import { ListFiltersComponent } from './components/list-filters/list-filters.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CompanyDataComponent } from './components/company-data/company-data.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CompanyComponent,
    ProductsComponent,
    HighlightsComponent,
    UsersComponent,
    CompanyWebComponent,
    ListFiltersComponent,
    CompaniesComponent,
    CardLineComponent,
    CompanyDataComponent
  ]
})
export class CompanyModule { }
