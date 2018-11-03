import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';

import { SidebarService } from './_services/sidebar.service';

var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};

@Component({
  selector: 'app-backoffice-layout',
  templateUrl: './backoffice-layout.component.html',
  styleUrls: ['./backoffice-layout.component.scss']
})
export class BackofficeLayoutComponent implements OnInit, AfterViewChecked {
    isNavExpand: boolean;
    isMenuExpand: boolean;
    isHideSidebar: boolean;

    constructor(private elementRef: ElementRef,
                private cdRef: ChangeDetectorRef,
                private $sidebar: SidebarService) {
        this.isNavExpand = this.$sidebar.isNavExpand;
        this.isMenuExpand = this.$sidebar.isMenuExpand;
        this.isHideSidebar = this.$sidebar.isHideSidebar;
        this.$sidebar.isNavExpandChange.subscribe(status => this.isNavExpand = status);
        this.$sidebar.isMenuExpandChange.subscribe(status => this.isMenuExpand = status);
        this.$sidebar.isHideSidebarChange.subscribe(status => this.isHideSidebar = status);
    }


    ngOnInit() {
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    onClick(event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(() => { fireRefreshEventOnWindow() }, 300);
    }
}
