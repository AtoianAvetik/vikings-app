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
            text: 'Шлемы',
            image: '/'
        },
        {
            id: 'armor',
            text: 'Броня',
            image: '/'
        },
        {
            id: 'weapons',
            text: 'Оружие',
            image: '/'
        },
        {
            id: 'boots',
            text: 'Обувь',
            image: '/'
        },
        {
            id: 'amulets',
            text: 'Амулеты',
            image: '/'
        },
    ];
    types = [
        {
            id: 'standard',
            text: 'Стандартные'
        },
        {
            id: 'invader',
            text: 'Захватчик'
        },
        {
            id: 'special',
            text: 'Специальные'
        },
        {
            id: 'shamans',
            text: 'Шаманы'
        }
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
