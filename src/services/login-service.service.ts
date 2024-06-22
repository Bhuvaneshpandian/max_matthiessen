import { Injectable, OnInit } from '@angular/core';
import { Login } from 'src/model/Login.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { CapacitorConfig } from '@capacitor/cli';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements OnInit {

  users: Login[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }
  async login(payLoad: Login, users: Login[]):Promise <string> {
    const user = this.getValidateUser(payLoad, users)
    if (user.length) {
      return "Login Successfully"
    }
     throw Error('User not found please check username and password');
  }

  async createNewUser(payLoad: Login, users: Login[]) {
    const user = this.getValidateUser(payLoad, users)
    if (!user.length) {
      return this.http.post(`${environment.url}/users`, payLoad).toPromise();
    }
    throw Error('UserName already exsits!');
  }


  getValidateUser(payLoad: Login, users: Login[]) {
    const userInfo = users.filter((user) => {
      return payLoad.userName === user.userName && payLoad.password === user.password && payLoad.idType === user.idType

    })
    return userInfo

  }

  fetchUsers() {
    const value = this.http.get<Login[]>(`${environment.url}/users`);
    return value
  }





}
