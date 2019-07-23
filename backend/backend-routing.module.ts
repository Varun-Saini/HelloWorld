import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackendComponent } from './backend.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user-management/user.module';
import { CustomerModule } from './customer-management/customer.module';
import {FarmModule} from './farm-management/farm.module';


const routes: Routes = [{
  path: 'dashboard',
  component: BackendComponent,
  children: [{
                path: '',
                loadChildren: () => DashboardModule
              }]
},{
  path: 'user-management',
  component: BackendComponent,
  children: [{
              path: '',
              loadChildren: () => UserModule
            }]
},{
  path: 'farm-management',
  component: BackendComponent,
  children: [{
              path: '',
              loadChildren: () => FarmModule
            }]
},{
  path: 'customer-management',
  component: BackendComponent,
  children: [{
              path: '',
              loadChildren: () => CustomerModule
            }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
