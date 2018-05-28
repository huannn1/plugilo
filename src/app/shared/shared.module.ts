import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoadingIndicatorComponent,
    PageNotFoundComponent,
    ToastComponent
  ],
  declarations: [LoadingIndicatorComponent, PageNotFoundComponent, ToastComponent]
})
export class SharedModule { }
