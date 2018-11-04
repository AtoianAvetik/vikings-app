import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentCreateComponent } from './equipment-create/equipment-create.component';
import { EquipmentItemComponent } from './equipment-item/equipment-item.component';
import { MatTabsModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        EquipmentsRoutingModule,
        Ng2SmartTableModule,
        MatTabsModule,
        MatTooltipModule
    ],
    declarations: [
        EquipmentsComponent,
        EquipmentCreateComponent,
        EquipmentItemComponent
    ],
    providers: [
    ]
})
export class EquipmentsModule {
}
