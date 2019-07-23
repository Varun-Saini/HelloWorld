import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmDetailComponent } from './farm-detail/farm-detail.component';
import { CropsListComponent } from '../farm-management/crops-list/crops-list.component';
const routes: Routes = [{
  path: '',
  component: CustomerComponent
}, {
  path: 'add-customer',
  component: AddCustomerComponent
}, {
  path: 'add-customer/:id',
  component: AddCustomerComponent
}, {
  path: 'farm-list',
  component: FarmListComponent
}, {
  path: 'farm-detail',
  component: FarmDetailComponent
}, {
  path: 'farm-detail/:id',
  component: FarmDetailComponent
}, {
  path: 'crops-list',
  component: CropsListComponent
}, {
  path: 'crops-list/:id',
  component: CropsListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
