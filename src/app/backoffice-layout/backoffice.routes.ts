import {Routes} from '@angular/router';

export const BackofficeRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'equipments',
        loadChildren: 'app/equipments/equipments.module#EquipmentsModule',
    }
];
