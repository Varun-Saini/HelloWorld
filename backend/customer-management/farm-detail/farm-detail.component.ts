import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.component.html',
  styleUrls: ['./farm-detail.component.css']
})
export class FarmDetailComponent implements OnInit {
  FarmID;
  farmDetail = [];
  constructor(private _userService: ServiceService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.FarmID = params.id);
    if (this.FarmID) {
      this.getFarmByID();
    }
  }
  getFarmByID() {
    let obj = {
      farmID: this.FarmID
    }

    this._userService.getFarmByID(obj).subscribe((data: any) => {
      this.farmDetail = data.data[0];
    })
  }
}