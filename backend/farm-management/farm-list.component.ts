import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  public allFarmByUser = [];
  userDetail;
  inputJson;

  constructor(private _userService: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.inputJson = {
      input : {
     companyCode: "WT",
     categogy: "Due"
    }
    
  }
    this.getUserDetail();
    this.getFarmByUser();
  }
  getFarmByUser() {
    let obj = {
      userID: this.userDetail.userID
    }
    this._userService.getFarmByUser(obj).subscribe((data: any) => {
      if (data.status) {
        this.allFarmByUser = data.data;
      } else {
        this.toastr.warning("Somthing went wrong")
      }
    })
  }

  deleteFarm(farmID, status) {
    let obj = {
      farmID: farmID,
      status: status
    }
    this._userService.deleteFarm(obj).subscribe((data: any) => {
      if (data.status) {
        if (status == 1) {
          this.toastr.success("Active Sucessfully")
        } else {
          this.toastr.success("Deactive Sucessfully")
        }
        this.getFarmByUser();

      } else {
        this.toastr.error(data.data)
      }

    });
  }
  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();
  }

}
