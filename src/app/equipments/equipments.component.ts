import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/_services/data.service';

@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
    equipments: any[] = [];
    allItems = [];
    categories = [
        {
            id: 'helmets',
            name: 'Шлемы',
            image: '/'
        },
        {
            id: 'armor',
            name: 'Броня',
            image: '/'
        },
        {
            id: 'weapons',
            name: 'Оружие',
            image: '/'
        },
        {
            id: 'boots',
            name: 'Обувь',
            image: '/'
        },
        {
            id: 'amulets',
            name: 'Амулеты',
            image: '/'
        },
    ];

    constructor(private $data: DataService) {
        this.$data.getEquipments().then(equipments => {
            this.equipments = equipments;
            console.log(equipments);
        });
    }

    ngOnInit() {
        this.$data.allItems.subscribe(data => {
            this.allItems = data;
            console.log(this.allItems);
        });
    }
}
