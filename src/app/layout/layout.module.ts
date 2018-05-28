import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, FooterComponent],
  providers: [
    AuthService
  ]
})
export class LayoutModule { }
