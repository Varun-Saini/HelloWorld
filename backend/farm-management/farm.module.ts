import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmRoutingModule } from './farm-routing.module';
import { AddFarmComponent } from './add-farm/add-farm.component';
import { FarmListComponent } from './farm-list.component';
import { CropsListComponent } from './crops-list/crops-list.component';
import { AddCropComponent } from './add-crop/add-crop.component';

//import { SafePipe } from '../../frontend/watch/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FarmRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AddFarmComponent, CropsListComponent, AddCropComponent,FarmListComponent],
  exports:[CropsListComponent]
})
export class FarmModule { }
