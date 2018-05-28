import { SearchComponent } from "./components/search/search.component";
import { Routes } from "@angular/router";
import { ListResultComponent } from "./components/list-result/list-result.component";

export const SearchRoutes: Routes = [
    {
        path: '',
        component: ListResultComponent
    }
    
]