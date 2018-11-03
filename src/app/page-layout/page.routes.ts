import {Routes} from '@angular/router';

export const PageRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    }
];

