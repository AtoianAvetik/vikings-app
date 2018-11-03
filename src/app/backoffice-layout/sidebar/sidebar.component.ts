import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ROUTES } from './sidebar-routes.config';
import { SidebarService } from '../_services/sidebar.service';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    animations: [
        trigger('slide', [
            state('down', style({height: '*', display: 'block'})),
            state('up', style({height: 0, display: 'none'})),
            transition('up => down', animate('300ms')),
            transition('down => up', animate('300ms'))
        ])
    ]
})

export class SidebarComponent implements OnInit {
    @HostListener('mouseenter') onMouseenter() {
        this.onHoverSidebar(true);
    }

    @HostListener('mouseleave') onMouseleave() {
        this.onHoverSidebar(false);
    }

    @HostListener('window:resize', ['$event']) onResize(event) {
        this.onHideSidebar();
    }

    @HostListener('document:click', ['$event']) onClick(event) {
        this.onClickOutside(event);
    }

    public menuItems: any[];
    public isNavExpand: boolean;

    constructor(private router: Router,
                private $sidebar: SidebarService,
                private route: ActivatedRoute) {
        this.isNavExpand = this.$sidebar.isNavExpand;
        this.$sidebar.isNavExpandChange.subscribe(status => this.isNavExpand = status);
    }

    ngOnInit() {
        this.setMenuItems();
        this.onHideSidebar();
    }

    setMenuItems() {
        this.menuItems = ROUTES;
    }

    onHoverSidebar(value) {
        this.$sidebar.hoverSidebar(value);
    }

    onToggleSidebar($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        this.$sidebar.toggleSidebar(value);
    }

    onHideSidebar() {
        this.$sidebar.hideSidebar();
    }

    onClickOutside(e) {
        if (!e.target.closest('app-sidebar')) {
            this.$sidebar.hideSidebar();
        }
    }
}
