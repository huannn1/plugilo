import { Routes } from "@angular/router";
import { CompanyComponent } from "./components/company/company.component";
import { ProductsComponent } from "./components/products/products.component";
import { UsersComponent } from "./components/users/users.component";
import { CompanyWebComponent } from "./components/company-web/company-web.component";
import { HighlightsComponent } from "./components/highlights/highlights.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { CompanyDataComponent } from "./components/company-data/company-data.component";

export const CompanyRoutes: Routes = [
    {
        path: '',
        component: CompanyComponent,
        children: [
            { path: '', component: CompanyWebComponent },
            { path: 'website', component: CompanyWebComponent },
            { path: 'data', component: CompanyDataComponent },
            { path: 'highlights', component: HighlightsComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'companies', component: CompaniesComponent },
            { path: 'users', component: UsersComponent },
            { path: 'widgets', loadChildren: '../widgets/widgets.module#WidgetsModule' },
            { path: 'statistics', loadChildren: '../statistics/statistics.module#StatisticsModule' }
        ]
    }
]