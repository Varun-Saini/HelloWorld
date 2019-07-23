import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public allUserList = [];

  constructor(private _userService: ServiceService, private toastr: ToastrService) {

    
   }

  

  ngOnInit() {

    this.getAllUser();
  }
  getAllUser() {
    
    this._userService.getAllUser().subscribe((data: any) => {
      if (data.status) {
        this.allUserList = data.data;
      } else {
        this.toastr.success(data.data)
      }
    })
  }

  deleteUser(userID, status) {
    let obj = {
      userID: userID,
      status: status

    }
    this._userService.deleteUser(obj).subscribe((data: any) => {
      if (data.status) {
        if (status == 1) {
          this.toastr.success("Active Sucessfully")
        } else {
          this.toastr.success("Deactive Sucessfully")
        }
        this.getAllUser();
      } else {
        this.toastr.error(data.data)
      }
    });
  }
}
