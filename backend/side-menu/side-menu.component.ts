import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  public showUser: boolean = false;
  public showFarm: boolean = false;
  public showCustomer: boolean = false;
  public showCustomerChild: boolean = false;
  public userDetail;
  constructor(private _userService: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUserDetail();
  }
  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();
    if (this.userDetail.userType == 5) {
      this.showUser = false;
      this.showFarm = false;
      this.showCustomer = true;
      this.showCustomerChild = false;
    } else if (this.userDetail.userType == 1) {
      this.showUser = true;
      this.showFarm = true;
      this.showCustomer = true;
      this.showCustomerChild = true;
    } else {
      this.showUser = false;
      this.showFarm = true;
      this.showCustomer = true;
      this.showCustomerChild = true;
    }

  }

}
