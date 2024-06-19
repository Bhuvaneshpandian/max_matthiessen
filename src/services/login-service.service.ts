import { Injectable, OnInit } from '@angular/core';
import { Login } from 'src/model/Login.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements OnInit {

  users: Login[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }
  async login(payLoad: Login, users: Login[]) {
    const user = this.getValidateUser(payLoad.userName, users)
    if (user.length) {
      return this.http.post('http://localhost:3000/users', payLoad)
    }
    throw Error('User not found!');
  }

  async createNewUser(payLoad: Login, users: Login[]) {
    const user = this.getValidateUser(payLoad.userName, users)
    if (!user.length) {
      return this.http.post('http://localhost:3000/users', payLoad).toPromise();
    }
    throw Error('UserName already exsits!');
  }


  getValidateUser(userName: string, users: Login[]) {
    const userInfo = users.filter((user) => {
      return user.userName == userName
    })
    return userInfo

  }

  fetchUsers() {
    const value = this.http.get<Login[]>('http://localhost:3000/users');
    return value
  }





}
