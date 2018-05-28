import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentsRoutes as routes } from './contents.routes';
import { ContentDetailComponent } from './components/content-detail/content-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContentDetailComponent
  ]
})
export class ContentsModule { }
