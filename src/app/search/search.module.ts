import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchRoutes as routes } from './search.routes';
import { SearchComponent } from './components/search/search.component';
import { ListResultComponent } from './components/list-result/list-result.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
// import { MasonryModule } from 'angular2-masonry';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InfiniteScrollModule,
    // MasonryModule
  ],
  declarations: [
    SearchComponent,
    ListResultComponent
  ]
})
export class SearchModule { }
