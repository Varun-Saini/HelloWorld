import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ServiceService } from '../../services/service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Crops } from '../../models/crops';
@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.css']
})
export class AddCropComponent implements OnInit {

  crops = new Crops;
  CropID;
  userDetail;
  public farmNameList = [];
  constructor(private _userService: ServiceService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.CropID = params.id);
    this.getUserDetail();
    this.getfarmName();
    if (this.CropID) {
      this.getCropByID();

    }
  }

  getfarmName() {
    let obj = {
      userID: this.userDetail.userID
    }
    this._userService.getfarmName(obj).subscribe((data: any) => {
      if (data.status) {
        this.farmNameList = data.data;
      } else {
        this.toastr.error(data.data)
      }
    })
  }

  addCrop() {
    this.crops.month = this.crops.month.toString()
    if (this.crops.cropID) {
      this._userService.editCrop(this.crops).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Update Sucessfully")
          this.router.navigateByUrl('/admin/farm-management/crops-list');
        } else {
          this.toastr.error(data.data)
        }
      });
    } else {
      this.crops.createdBy = this.userDetail.userID
      this._userService.addCrop(this.crops).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Saved Sucessfully")
          this.router.navigateByUrl('/admin/farm-management/crops-list');
        } else {
          this.toastr.error(data.data)
        }

      });
    }
  }
  getCropByID() {

    let obj = {
      cropID: this.CropID
    }
    this._userService.getCropByID(obj).subscribe((data: any) => {

      this.crops = data.data[0];
      this.crops.month = this.crops.month.split(",")
    })

  }
  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();
  }


}
