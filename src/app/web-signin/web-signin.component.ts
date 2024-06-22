import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/model/Login.model';
import { User } from 'src/model/User';
import { AuthService } from 'src/services/auth.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-web-signin',
  templateUrl: './web-signin.component.html',
  styleUrls: ['./web-signin.component.css']
})
export class WebSigninComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({});
  loginError: string = "";
  canShowNewUser: boolean = false;
  users: Login[] = []
  canShowLoader: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private loginService: LoginServiceService) {

  }
  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      idType: ['bankId', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.setUsers()

  }


  async setUsers(): Promise<void> {
    try {
      this.loginService.fetchUsers().subscribe({
        next: (users) => {
          this.users = users;
        },
        error: (error) => {
          console.error('Error fetching users:', error);
        }
      });
    } catch (error) {
      console.error('Error in setUsers:', error);
    }
  }




  async onSubmit() {
    try {
      this.canShowLoader = true
      if (this.signInForm.valid) {
        const payload: User = { idType: this.signInForm.value.idType, userName: this.signInForm.value.userName, password: this.signInForm.value.password };
        if (payload.userName && payload.password) {
      await this.loginService.login({ userName: payload.userName, password: payload.password, idType: payload.idType }, this.users)
          await this.authService.login(payload?.userName, payload.password, payload.idType);
        }
        this.router.navigate(["/dashboard"])
      }
    }
    catch (error: any) {
      this.loginError = error.message
    }
    finally {
      this.canShowLoader = false
    }
  }
  onBecomeClick() {
    this.canShowNewUser = true
    this.loginError = ""
  }
}


