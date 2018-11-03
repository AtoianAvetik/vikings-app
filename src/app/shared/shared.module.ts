import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormsModule} from '@angular/forms';
import {ImageCropperDialogComponent} from './dialogs/image-cropper-dialog/image-cropper-dialog.component';
import {MatDatepickerModule, MatDialogModule, MatNativeDateModule} from '@angular/material';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';


@NgModule({
    exports: [
        CommonModule,
        MatDialogModule,
        Ng2SmartTableModule,
        FormsModule,
        ImageCropperDialogComponent,
        ImageUploaderComponent,
        MatDatepickerModule
    ],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ImageCropperModule,
        MatDialogModule
    ],
    declarations: [
        ImageCropperDialogComponent,
        ImageUploaderComponent
    ],
    entryComponents: [
        ImageCropperDialogComponent,
    ],
    providers: [
    ]
})
export class SharedModule {
}
