import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmDetailComponent } from './farm-detail/farm-detail.component';
import { FarmModule } from '../farm-management/farm.module';
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FarmModule
  ],
  declarations: [CustomerComponent, AddCustomerComponent, FarmListComponent, FarmDetailComponent]
})
export class CustomerModule { }
