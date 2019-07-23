import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../models/users';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allUserList=[];
  constructor(private _userService: ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    
    this.getAllUser();
   }
   getAllUser(){
    this._userService.getAllUser().subscribe((data: any) => {
    this.allUserList = data.data;
    })
  }
}
