import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from '../../services/service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
/* import { Customers } from '../../models/customers'; */
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
  userID;
  userDetail;
  locationList = [];

  constructor(private _userService: ServiceService, private route: ActivatedRoute, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.userID = params.id);
    if (this.userID) {
      this.getCustomerByID();
    }
    this.getLocation();
    this.customerForm = this.formBuilder.group({
      userID: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      userType: ['5'],
      workLocation: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      createdBy: [''],
      createdDate: ['']

    });
      //get Current User
      this.userDetail = this._userService.getUserDetail();

  }
  addCustomer() {
    if (this.customerForm.get('userID').value) {
      this._userService.editCustomer(this.customerForm.value).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Update Sucessfully")
        } else {
          this.toastr.error(data.data)
        }
      });
    } else {
      this.customerForm.patchValue({
        createdBy: this.userDetail.userID
      })

      this._userService.addCustomer(this.customerForm.value).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Saved Sucessfully")
        } else {
          this.toastr.error(data.data)
        }
      });
    }
  }
  getLocation() {
    this._userService.getLocation().subscribe((data: any) => {
      this.locationList = data.data;
    })
  }
  getCustomerByID() {
    let obj = {
      userID: this.userID
    }

    this._userService.getCustomerByID(obj).subscribe((data: any) => {
      //this.customerForm = data.data[0];
      //console.log(this.customerForm)
      this.customerForm.setValue({
        userID: data.data[0].userID,
        firstName: data.data[0].firstName,
        lastName: data.data[0].lastName,
        email: data.data[0].email,
        mobile: data.data[0].mobile,
        pincode: data.data[0].pincode,
        workLocation: data.data[0].workLocation,
        addressLine1: data.data[0].addressLine1,
        addressLine2: data.data[0].addressLine2,
        createdBy: data.data[0].createdBy,
        createdDate: data.data[0].createdDate,
        userType: data.data[0].userType
      });
    })
  }

}
