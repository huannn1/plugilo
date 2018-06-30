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
import { ConnectDemoComponent } from './components/connect-demo/connect-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AuthModule,
    LayoutModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
