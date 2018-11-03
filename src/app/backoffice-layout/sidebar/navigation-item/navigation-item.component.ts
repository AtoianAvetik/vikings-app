import {
    ChangeDetectorRef,
    Component, Input, OnInit,
    ViewContainerRef
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import {SidebarService} from '../../_services/sidebar.service';


@Component({
    selector: 'app-navigation-item',
    templateUrl: './navigation-item.component.html',
    animations: [
        trigger('slide', [
            state('down', style({height: '*', display: 'block', opacity: 1})),
            state('up', style({height: 0, display: 'none', opacity: 0})),
            transition('up => down', animate('150ms')),
            transition('down => up', animate('150ms'))
        ])
    ]
})

export class NavigationItemComponent implements OnInit {
    @Input() menuItem;
    isActiveRoute = false;
    isNavCollapsedOpen = false;
    _isOpen = false;
    type: string;

    @Input()
    set isOpen(value: boolean) {
        this._isOpen = value;
    }

    get isOpen() {
        return this._isOpen;
    }

    constructor(private _router: Router,
                public _vcr: ViewContainerRef,
                private _cdr: ChangeDetectorRef,
                private $sidebar: SidebarService) {
    }

    // constructor(@Inject(forwardRef(() => SidebarComponent)) private _parent:SidebarComponent) {
    // 	console.log(_parent);
    // }

    ngOnInit() {
        this.setType();
        this.setActiveRoute();
        this.$sidebar.isMenuExpandChange
            .subscribe((status) => {
                if (status) {
                    this.isNavCollapsedOpen && (this.isOpen = true);
                } else {
                    this.isOpen = false;
                }
            });
        this.$sidebar.routeChange.subscribe((val: string) => {
            this.setActiveRoute(val);
        });
    }

    setType() {
        if (this.menuItem.isExternalLink) {
            this.type = 'external';
        } else if (!this.menuItem.path) {
            this.type = 'accordion';
        } else {
            this.type = 'routerLink';
        }
    }

    openParentTree() {
        let parentComponent = this._vcr['_data'].componentView.component._vcr['_view'].component;

        while (parentComponent.menuItem) {
            parentComponent.isOpen = true;
            parentComponent.isActiveRoute = true;
            parentComponent.isNavCollapsedOpen = true;
            parentComponent = parentComponent._vcr['_view'].component;
        }
    }

    setActiveRoute(val?) {
        const path = val ? this._vcr.element.nativeElement.classList[0] : this.menuItem.path;
        const cond = val || this._router.url;

        if (cond === path) {
            this.openParentTree();
        } else if (cond.indexOf(path) === 0 && path.length) {
            this.isActiveRoute = true;
            this.openParentTree();
        } else {
            this.isOpen = false; // close other menu lists
            this.isActiveRoute = false;
            this.isNavCollapsedOpen = false;
            return false;
        }

        if (!this._cdr['destroyed']) {
            this._cdr.detectChanges();
        }
    }

    onToggleMenu(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        !this.isOpen && this.$sidebar.routeChange.next(this._vcr.element.nativeElement.classList[0]);

        if (this.type === 'routerLink') {
            this.isNavCollapsedOpen = true;
            return this.isOpen = true;
        }

        this.isOpen = !this.isOpen;
        this.isNavCollapsedOpen = this.isOpen;
    }
}
