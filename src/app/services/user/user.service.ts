import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
  user: any;
  password: any;
  logedin: boolean;

  userChanges = new EventEmitter<any>();

  constructor(private http:HttpClient) { }
  login(user, password){
    this.user = user;
    this.password = password;
    this.logedin = true;
    this.userChanges.emit();
  }

  logout(){
    this.user = {};
    this.logedin = false;
    this.userChanges.emit();
  }

  isLogedin<booelan>(){
    return this.logedin;
  }
}
