import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes as routes } from './home.routes';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { LayoutModule } from '../layout/layout.module';
import { BootstrapallComponent } from './components/bootstrapall/bootstrapall.component';
import { ListComponent } from './components/list/list.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { CompanyWebComponent } from './components/company-web/company-web.component';
import { CompanyDataComponent } from './components/company-data/company-data.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AuthModule,
    LayoutModule
  ],
  declarations: [HomeComponent, BootstrapallComponent, ListComponent, HighlightComponent, CompanyWebComponent, CompanyDataComponent]
})
export class HomeModule { }
