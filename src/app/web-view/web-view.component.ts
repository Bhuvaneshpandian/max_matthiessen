import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.css'],
})


export class WebViewComponent implements OnInit{

  constructor(private authService: AuthService,private router:Router){
  }

  ngOnInit(): void {
  const user = this.authService.getUserInfo();
  if (user?.userName) {
    this.router.navigate(["/dashboard"])
    return
  }
  this.router.navigate(["/login"])
  }




}
