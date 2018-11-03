import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-equipment-item',
    templateUrl: './equipment-item.component.html',
    styleUrls: ['./equipment-item.component.scss']
})
export class EquipmentItemComponent implements OnInit {
    @Input('item') item;

    constructor() {
    }

    ngOnInit() {
    }

}
