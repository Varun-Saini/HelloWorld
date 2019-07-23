import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from '../../services/service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Farms } from '../../models/farms';
import { Router} from "@angular/router";
@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.css']
})
export class AddFarmComponent implements OnInit {
  farms = new Farms;
  public userID;
  userDetail;
  FarmID;
  public locationList = [];
  public farmOwnerList = [];

  constructor(private _userService: ServiceService,private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }
  ngOnInit() {
    this.route.params.subscribe(params => this.FarmID = params.id);
    this.getLocation();
    this.getUserDetail();
    this.getFarmOwner();
    if (this.FarmID) {
      this.getFarmByID();
    }

  }

  getLocation() {
    this._userService.getLocation().subscribe((data: any) => {
      this.locationList = data.data;
    })
  }
  getFarmOwner() {
    let obj = {
      userID: this.userDetail.userID
    }
    this._userService.getFarmOwner(obj).subscribe((data: any) => {
      if (data.status) {
        this.farmOwnerList = data.data;
      }
      else {
        this.toastr.error(data.data)
      }
    })
  }

  addFarm() {
    if (this.farms.farmID) {
      this._userService.editFarm(this.farms).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Update Sucessfully")
          this.router.navigateByUrl('/admin/farm-management');
        } else {
          this.toastr.error(data.data)
        }
      });
    } else {
      this.farms.createdBy = this.userDetail.userID
      this._userService.addFarm(this.farms).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Saved Sucessfully")
          this.router.navigateByUrl('/admin/farm-management');
        } else {
          this.toastr.error(data.data)
        }

      });
    }
  }
  getFarmByID() {
    let obj = {
      farmID: this.FarmID
    }
    this._userService.getFarmByID(obj).subscribe((data: any) => {
      if (data.status) {
        this.farms = data.data[0];
      } else {
        this.toastr.error(data.data)
      }

    })
  }
  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();
  }

}
