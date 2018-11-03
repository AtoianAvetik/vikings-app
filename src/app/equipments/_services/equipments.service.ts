import { Injectable } from '@angular/core';
import { ApiService } from '../../core/_services/api.service';

@Injectable()
export class EquipmentsService {
    equipments: any[] = [];

    constructor(private $api: ApiService) {
    }

    getEquipments() {
        return this.$api.getJson('assets/json/equipments.json').then((data: any[]) => {
            this.equipments = data;
            return this.equipments;
        });
    }
}
