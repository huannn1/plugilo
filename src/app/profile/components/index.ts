import { ProfileOverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomListsComponent } from './custom-lists/custom-lists.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const components: any[] = [
    CustomListsComponent,
    NotificationsComponent,
    ProfileOverviewComponent,
    ProfileComponent
];

export * from './custom-lists/custom-lists.component';
export * from './notifications/notifications.component';
export * from './overview/overview.component';
export * from './profile/profile.component';