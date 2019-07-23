import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { BackendComponent } from './backend.component';
import { ProfileComponent } from './profile/profile.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BackendRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BackendComponent, ProfileComponent,  SideMenuComponent, HeaderComponent]
})
export class BackendModule { }
