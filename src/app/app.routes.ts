import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { Path } from '@firebase/database/dist/src/core/util/Path';
import { CallbackComponent } from './auth/components/callback/callback.component';
import { HomeComponent } from './home/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { BootstrapallComponent } from './home/components/bootstrapall/bootstrapall.component';
import { ListComponent } from './home/components/list/list.component';
import { HighlightComponent } from './home/components/highlight/highlight.component';
import { ConnectDemoComponent } from './home/components/connect-demo/connect-demo.component';
// import { CanActivateViaAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            // {
            //     path: '',
            //     loadChildren: '../home/home.module#HomeModule',
            // },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule',
                
            },
            {
                path: 'company',
                loadChildren: './company/company.module#CompanyModule'
            },{
                path: 'search',
                loadChildren: './search/search.module#SearchModule'
            },
            {
                path: 'bootstrap',
                component: BootstrapallComponent
            },
            {
                path: 'list',
                component: ListComponent
            },
            {
                path: 'highlight',
                component: HighlightComponent
            },
            {
                path: 'connect',
                component: ConnectDemoComponent
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: 'callback',
        component: CallbackComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
