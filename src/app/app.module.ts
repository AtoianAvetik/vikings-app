import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressModule } from '@ngx-progressbar/core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        Ng2SmartTableModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            preventDuplicates: true,
            closeButton: true
        }),
        NgProgressModule.forRoot({
            color: '#3f51b5',
            meteor: true,
            speed: 200,
            trickleSpeed: 100
        }),
        NgProgressHttpModule,
        NgProgressRouterModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
