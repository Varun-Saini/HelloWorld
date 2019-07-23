import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  allFarmByUser = [];
  userDetail;
  constructor(private _userService: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUserDetail();
    this.getAllFarm();
  }
  getAllFarm() {
    this._userService.getAllFarm().subscribe((data: any) => {
      if (data.status) {
        this.allFarmByUser = data.data;

      } else {
        this.toastr.warning("Somthing went wrong")
      }
    })
  }

  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();
  }
}
