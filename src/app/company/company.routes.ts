import { Routes } from "@angular/router";
import { CompanyComponent } from "./components/company/company.component";

export const CompanyRoutes: Routes = [
    {
        path: '',
        component: CompanyComponent,
        children: [
            { path: '', loadChildren: '../contents/contents.module#ContentsModule' },
            { path: 'highlights', loadChildren: '../search/search.module#SearchModule' },
            { path: 'widgets', loadChildren: '../widgets/widgets.module#WidgetsModule' },
            { path: 'statistics', loadChildren: '../statistics/statistics.module#StatisticsModule' }
        ]
    }
]