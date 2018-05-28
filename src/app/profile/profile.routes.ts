import { Routes } from "@angular/router";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileOverviewComponent } from "./components/overview/overview.component";
import { CustomListsComponent } from "./components";

export const UserRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { path: '', component: ProfileOverviewComponent },
            { path: 'lists', component: CustomListsComponent },
            { path: 'notifications', component: NotificationsComponent }
        ]
    }
]