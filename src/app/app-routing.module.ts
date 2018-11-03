import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeLayoutComponent } from './backoffice-layout/backoffice-layout.component';
import { BackofficeRoutes } from './backoffice-layout/backoffice.routes';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageRoutes } from './page-layout/page.routes';

const appRoutes: Routes = [
    {
        path: '',
        component: BackofficeLayoutComponent,
        children: BackofficeRoutes
    },
    {
        path: '',
        component: PageLayoutComponent,
        children: PageRoutes
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
