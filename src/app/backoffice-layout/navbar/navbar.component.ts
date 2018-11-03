import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../_services/sidebar.service';

@Component( {
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
} )

export class NavbarComponent {
    isHideSidebar: boolean;
    toggleClass = 'ft-maximize';

    constructor( private router: Router,
                 private _sidebarService: SidebarService ) {
        this.isHideSidebar = this._sidebarService.isHideSidebar;
        this._sidebarService.isHideSidebarChange.subscribe(status => this.isHideSidebar = status);
    }

    onLogout() {
    }

    editProfile() {
        // let userId = this.$access.user.id;
        // this.router.navigate( [`users/${userId}`] );

    }

    ToggleClass() {
        if ( this.toggleClass === 'ft-maximize' ) {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize';
    }

    toggleSidebar() {
        event.preventDefault();
        event.stopPropagation();
        this._sidebarService.isHideSidebarChange.next( !this.isHideSidebar );
    }
}
