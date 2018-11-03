import { Component, OnInit } from '@angular/core';
import { EquipmentsService } from './_services/equipments.service';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
    equipments: any[] = [];

    constructor(private $equipments: EquipmentsService) {
        this.$equipments.getEquipments().then(equipments => {
            this.equipments = equipments;
            console.log(equipments);
        });
    }

    ngOnInit() {
    }
}
