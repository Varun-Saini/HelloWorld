import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [UserComponent, AddUserComponent]
})
export class UserModule { }
