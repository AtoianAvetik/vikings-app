import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentsComponent } from './equipments.component';
import { EquipmentCreateComponent } from './equipment-create/equipment-create.component';

const routes: Routes = [
    {
        path: '',
        component: EquipmentsComponent,
        data: {
            title: 'Equipment'
        },
    },
    {
        path: 'create',
        component: EquipmentCreateComponent,
        data: {
            title: 'Create equipment'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipmentsRoutingModule {
}
