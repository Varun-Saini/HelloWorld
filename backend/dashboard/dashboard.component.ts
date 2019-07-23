import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public lists = [];
 public errorMessage;
  constructor(private _list: ServiceService) { }

  ngOnInit() {
    /* this._list.getlist()
    .subscribe(data => this.lists = data,
              error => this.errorMessage = error); */
  }

}
