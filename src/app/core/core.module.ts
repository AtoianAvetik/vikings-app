import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackofficeLayoutModule } from '../backoffice-layout/backoffice-layout.module';
import { PageLayoutModule } from '../page-layout/page-layout.module';
import { ApiService } from './_services/api.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        RouterModule,
        NgbModule,
        BackofficeLayoutModule,
        PageLayoutModule
    ],
    exports: [],
    declarations: [],
    providers: [
        ApiService,
    ]
})

export class CoreModule {
}
