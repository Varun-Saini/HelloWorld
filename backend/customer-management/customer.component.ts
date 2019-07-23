import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  allCustomerByUser;
  userDetail;
  constructor(private _userService: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUserDetail();
    this.getCustomerByUser();
  }
  getCustomerByUser() {
    let obj = {
      userID: this.userDetail.userID
    }
    this._userService.getCustomerByUser(obj).subscribe((data: any) => {
      if (data.status) {
        this.allCustomerByUser = data.data;
      } else {
        this.toastr.error(data.data)
      }

    })
  }
  deleteCustomer(customerID, status) {
    let obj = {
      userID: customerID,
      status: status
    }
    this._userService.deleteCustomer(obj).subscribe((data: any) => {
      if (data.status) {
        if (status == 1) {
          this.toastr.success("Active Sucessfully")
        } else {
          this.toastr.success("Deactive Sucessfully")
        }
        this.getCustomerByUser();
      } else {
        this.toastr.error(data.data)
      }

    });
  }
  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();
  }
}
