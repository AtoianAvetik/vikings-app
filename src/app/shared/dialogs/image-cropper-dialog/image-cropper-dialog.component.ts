import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-image-cropper-dialog',
    templateUrl: './image-cropper-dialog.component.html',
    styleUrls: ['./image-cropper-dialog.component.scss']
})
export class ImageCropperDialogComponent {

    imageChangedEvent: any = '';
    croppedImage: any = '';
    cropperReady = false;
    aspectRatio = 1 / 1;
    resizeToWidth = null;


    constructor(public dialogRef: MatDialogRef<ImageCropperDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
        this.imageChangedEvent = data.event;
        this.aspectRatio = data.aspectRatio;
        this.resizeToWidth = data.resizeToWidth;
    }


    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(image: string) {
        this.croppedImage = image;
    }

    imageLoaded() {
        this.cropperReady = true;
    }

    imageLoadFailed() {
        console.log('Load failed');
    }

    onClose(): void {
        this.dialogRef.close('qqqq');
    }
}
