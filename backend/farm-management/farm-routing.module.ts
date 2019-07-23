import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmListComponent } from './farm-list.component';
import { AddFarmComponent } from './add-farm/add-farm.component';
import { CropsListComponent } from './crops-list/crops-list.component';
import { AddCropComponent } from './add-crop/add-crop.component';

const routes: Routes = [{
  path: '',
  component: FarmListComponent
}, {
  path: 'add-farm',
  component: AddFarmComponent
}, {
  path: 'add-farm/:id',
  component: AddFarmComponent
}, {
  path: 'add-crop',
  component: AddCropComponent
}, {
  path: 'add-crop/:id',
  component: AddCropComponent
}, {
  path: 'crops-list',
  component: CropsListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule { }
