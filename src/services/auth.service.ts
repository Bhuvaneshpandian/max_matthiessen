import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(userName:string,password:string,idType:string):void{
    localStorage.setItem('user', JSON.stringify({userName,password,idType}));
  }

  getUserInfo():any{
    const userInfo:string|null = localStorage.getItem('user');
    if(userInfo){
      return JSON.parse(userInfo)
    }
  }

  clearLocalStorage(){
    localStorage.clear()
  }
}
