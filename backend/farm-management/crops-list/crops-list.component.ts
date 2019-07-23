import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-crops-list',
  templateUrl: './crops-list.component.html',
  styleUrls: ['./crops-list.component.css']
})
export class CropsListComponent implements OnInit {
  public allCropByFarm = [];
  public allFarmByUser = [];
  public currentFarm;
  farmName;
  FarmID;
  userDetail;
  constructor(private _userService: ServiceService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.FarmID = params.id);
    if (this.FarmID) {
      this.farmName = this.FarmID;
      this.getCropByFarm(this.FarmID);
    }
    this.getUserDetail();
    this.getFarmByUser();
    //get Current User
    this.userDetail = this._userService.getUserDetail();
  }

  getFarmByUser() {
    let obj = {
      userID: this.userDetail.userID
    }
    this._userService.getFarmByUser(obj).subscribe((data: any) => {
      if(data.status){
        this.allFarmByUser = data.data;        
      }
    })
  }
  getCropByFarm(farmID) {

    this.currentFarm = farmID
    let obj = {
      farm: farmID
    }
    this._userService.getCropByFarm(obj).subscribe((data: any) => {
      if (data.status) {
        this.allCropByFarm = data.data;
      } else {
        this.allCropByFarm = [];
        this.toastr.warning("No Record Found")
      }


    })
  }
  deleteCrop(cropID, status) {
    let obj = {
      cropID: cropID,
      status: status
    }
    this._userService.deleteCrop(obj).subscribe((data: any) => {
      if (data.status) {
        if (status == 1) {
          this.toastr.success("Active Sucessfully")
        } else {
          this.toastr.success("Deactive Sucessfully")
        }
        this.getCropByFarm(this.currentFarm);

      } else {
        this.toastr.error(data.data)
      }

    });
  }
  updateCropStage(cropID, stage) {
    let obj = {
      cropID: cropID,
      stage: stage
    }
    this._userService.updateCropStage(obj).subscribe((data: any) => {
      if (data.status) {
        if (stage == 'New') {
          this.toastr.success("New Stage")
        } else if (stage == 'Growing') {
          this.toastr.success("Growing Stage")
        } else {
          this.toastr.success("Harvesting Satge")
        }
        this.getCropByFarm(this.currentFarm);

      } else {
        this.toastr.error(data.data)
      }
    });
  }
  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();

  }
}
