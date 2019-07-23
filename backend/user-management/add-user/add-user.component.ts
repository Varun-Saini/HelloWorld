import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from '../../services/service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../../models/users';
import { Router} from "@angular/router";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users = new Users();
  errorMessage;
  userID;
  userDetail;
  subscription: Subscription;
  public userTypeList = [];
  public locationList = [];
  public user = [];
  constructor(private _userService: ServiceService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.userID = params.id);
    this.getUserType();
    this.getLocation();
    if (this.userID) {
      this.getUser();
    }

    //get Current User
    this.userDetail = this._userService.getUserDetail();
  }

  addUser() {
    if (this.users.userID) {
      this._userService.editUser(this.users).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Update Sucessfully")
          this.router.navigateByUrl('/admin/user-management');
        } else {
          this.toastr.error(data.data)
        }
      });
    } else {
      this.users.createdBy = this.userDetail.userID
      this._userService.addUser(this.users).subscribe((data: any) => {
        if (data.status) {
          this.toastr.success("Saved Sucessfully")
          this.router.navigateByUrl('/admin/user-management');
        } else {
          this.toastr.error(data.data)
        }

      });
    }
  }
  getUserType() {
    this._userService.getUserType().subscribe((data: any) => {
      if (data.status) {
        this.userTypeList = data.data;
      } else {
        this.toastr.error(data.data)
      }
    })
  }
  getLocation() {
    this._userService.getLocation().subscribe((data: any) => {
      this.locationList = data.data;
    })
  }
  getUser() {
    let obj = {
      userID: this.userID
    }
    this._userService.getUser(obj).subscribe((data: any) => {
      if (data.status) {
        this.users = data.data[0];
      } else {
        this.toastr.error(data.data)
      }
    })
  }
}
