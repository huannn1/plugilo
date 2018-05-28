import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsRoutes as routes } from './widgets.routes';
import { RouterModule } from '@angular/router';
import { WidgetsComponent } from './components/widgets/widgets.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WidgetsComponent
  ]
})
export class WidgetsModule { }
