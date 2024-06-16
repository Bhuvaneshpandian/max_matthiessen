import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(userName:string,password:string):void{
    localStorage.setItem('user', JSON.stringify({userName,password}));
  }

  getUserInfo():User{
    const userInfo:string|null = localStorage.getItem('user');
    if(userInfo){
      return JSON.parse(userInfo)
    }
    return{}
  }

  clearLocalStorage(){
    localStorage.clear()
  }
}
