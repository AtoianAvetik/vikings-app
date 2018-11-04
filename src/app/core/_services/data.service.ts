import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    equipments: any[] = [];
    materials: any[] = [];
    allItems = new BehaviorSubject<any>({});

    constructor(private $api: ApiService) {
        this.getEquipments();
        this.getMaterials();
    }

    getEquipments() {
        return this.$api.getJson('assets/json/equipments.json').then((data: any[]) => {
            this.equipments = data;
            this.setItems();
            return this.equipments;
        });
    }

    getMaterials() {
        return this.$api.getJson('assets/json/materials.json').then((data: any[]) => {
            this.materials = data;
            this.setItems();
            return this.materials;
        });
    }

    setItems() {
        const items = {};
        this.equipments.forEach(item => {
            items[item.id] = item;
        });
        this.materials.forEach(item => {
            items[item.id] = item;
        });
        this.allItems.next(items);
    }
}
