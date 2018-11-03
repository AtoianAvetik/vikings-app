import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BackofficeLayoutComponent} from './backoffice-layout.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavigationItemComponent} from './sidebar/navigation-item/navigation-item.component';
import {RouterModule} from '@angular/router';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SidebarService} from './_services/sidebar.service';
import {WindowRef} from './_services/window-ref';
import {ToggleFullscreenDirective} from '../core/_directives/toggle-fullscreen.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
        PerfectScrollbarModule
    ],
    declarations: [
        BackofficeLayoutComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        NavigationItemComponent,
        ToggleFullscreenDirective
    ],
    entryComponents: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        BackofficeLayoutComponent
    ],
    providers: [
        SidebarService,
        WindowRef,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class BackofficeLayoutModule {
}
