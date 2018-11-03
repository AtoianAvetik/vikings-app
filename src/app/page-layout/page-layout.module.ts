import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageLayoutComponent} from './page-layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [PageLayoutComponent],
    exports: [PageLayoutComponent]
})
export class PageLayoutModule {
}
