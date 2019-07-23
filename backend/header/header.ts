import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class HeaderComponent implements OnInit {
  userDetail;
  constructor(private _userService: ServiceService, private router: Router) { }

  ngOnInit() {

    this.getUserDetail();
  }

  logout(e) {
    localStorage.removeItem('mtdUser');
    this.router.navigate(['/login']);

  }
  getUserDetail() {
    this.userDetail = this._userService.getUserDetail();
  }
}
