import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ImageCropperDialogComponent} from '../dialogs/image-cropper-dialog/image-cropper-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-image-uploader',
    templateUrl: './image-uploader.component.html',
    styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
    @ViewChild('inputFile') inputFile: any;
    @Input('containerWidth') containerWidth = 100;
    @Input('containerHeight') containerHeight = 100;
    @Input('resizeToWidth') resizeToWidth = null;
    @Input('aspectRatio') aspectRatio = 1 / 1;
    @Input('imageData') imageData = 'http://www.liverpoolfc.ru/news_img/mw/mediawatch1.jpg';
    @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    triggerFileInput() {
        this.inputFile.nativeElement.click();
    }

    openDialog(event) {
        let dialogRef = this.dialog.open(ImageCropperDialogComponent, {
            maxWidth: '80vw',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            data: {
                event: event,
                aspectRatio: this.aspectRatio,
                resizeToWidth: this.resizeToWidth
            }
        });

        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.imageData = data;
                this.onChange.next(data);
            }
            this.inputFile.nativeElement.value = '';
        });
    }

    removeImage() {
        this.imageData = null;
        this.onChange.next('');
    }
}
