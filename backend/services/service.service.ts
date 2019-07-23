import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import {listItem} from './models/list';
//import { users } from './models/users';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import "rxjs/Rx";
import {_throw} from 'rxjs/observable/throw';
//import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { loginUser } from './../models/loginUser';
@Injectable()
export class ServiceService {

  //private url: string = "/assets/data/lists.json";
  //private urlE: string = "/assets/data/employee.json";
  private currentUserSubject = new BehaviorSubject<loginUser>(new loginUser());
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  setUser(value: any) {
    console.log(value)
    this.currentUserSubject.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
  }

  /* createObservable(){
    return this.currentUser.asObservable();
  } */

  //getlist():Observable<listItem[]>{
  //return this.http.get<listItem[]>(this.url)
  //.catch(this.errorHandler);
  //}


  /* 
    getUser() {
      return this.http.get('http://localhost/services/getDesignation')
        //.catch(this.errorHandler);
    }
  
    addEmployee(data) {
      var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      var options =  {
          headers: headers
      };
  
      return this.http.post('http://localhost/services/addUser', data, options)
        //.catch(this.errorHandler);
    } */
  //getlist(): Observable<employeeDetail[]> {
  //return this.http.get<employeeDetail[]>(this.urlE)
  // .catch(this.errorHandler);
  //}
  //errorHandler(error: HttpErrorResponse) {
  //return Observable.throw(error.message || "Something went wrong");

  getUserDetail() {
    let user = {};
    let currentUser = localStorage.getItem("mtdUser")
    if (currentUser) {
      return JSON.parse(currentUser);
    } else {
      return user;
    }
  }
  addUser(data) {
    return this.http.post('http://localhost/services/addUser', data)
  };
  editUser(data) {
    return this.http.post('http://localhost/services/editUser', data)
  }
  getUserType() {
    return this.http.get('http://localhost/services/getUserType')
  }
  getLocation() {
    return this.http.get('http://localhost/services/getLocation')
  }
  /*  getAllUser() {
     return this.http.get('http://localhost/services/getAllUser')
   } */

  getAllUser(): Observable<any> {
    return this.http
      .get('http://localhost/services/getAllUser')
      .map((response: Response) => {
        return <any>response;
      })
      .catch(this.handleError);
  }
  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Something went wrong");
  }


  getUser(data) {
    return this.http.post('http://localhost/services/getUser', data)
  }
  login(data) {
    return this.http.post('http://localhost/services/login', data)
  }
  deleteUser(data) {
    return this.http.post('http://localhost/services/deleteUser', data)
  }
  getFarmOwner(data) {
    return this.http.post('http://localhost/services/getFarmerByUserID', data)
  }
  addFarm(data) {
    return this.http.post('http://localhost/services/addFarm', data)
  }
  editFarm(data) {
    return this.http.post('http://localhost/services/editFarm', data)
  }
  cropType() {
    return this.http.get('http://localhost/services/getAllUser')
  }
  getfarmName(data) {
    return this.http.post('http://localhost/services/getFarmByUserID', data)
  }
  addCrop(data) {
    return this.http.post('http://localhost/services/addCrop', data)
  }
  editCrop(data) {
    return this.http.post('http://localhost/services/editCrop', data)
  }
  getFarmByUser(data) {
    return this.http.post('http://localhost/services/getFarmByUser', data)
  }
  getAllFarm() {
    return this.http.get('http://localhost/services/getAllFarm')
  }
  getFarmByID(data) {
    return this.http.post('http://localhost/services/getFarmByID', data)
  }
  getCropByFarm(data) {
    return this.http.post(' http://localhost/services/getCropByFarm', data)
  }
  getCropByID(data) {
    return this.http.post('http://localhost/services/getCropByID', data)
  }
  addCustomer(data) {
    return this.http.post('http://localhost/services/addCustomer', data)
  }
  editCustomer(data) {
    return this.http.post('http://localhost/services/editCustomer', data)
  }
  getCustomerByID(data) {
    return this.http.post('http://localhost/services/getCustomerByID', data)
  }
  getCustomerByUser(data) {
    return this.http.post('http://localhost/services/getCustomerByUser', data)
  }
  deleteCustomer(data) {
    return this.http.post('http://localhost/services/deleteCustomer', data)
  }
  deleteFarm(data) {
    return this.http.post('http://localhost/services/deleteFarm', data)
  }
  deleteCrop(data) {
    return this.http.post('http://localhost/services/deleteCrop', data)
  }
  updateCropStage(data) {
    return this.http.post('http://localhost/services/editCropStage', data)
  }
}

