import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/model/Login.model';
import { User } from 'src/model/User';
import { AuthService } from 'src/services/auth.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent {

  signInForm: FormGroup = new FormGroup({});
  users: Login[] = []
  errorMessage: string = ""


  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      idType: ['bankId', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginService.fetchUsers().subscribe((user) => {
      this.users = user
    })
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private loginService: LoginServiceService) { }

  async onSubmit() {
    try {
      if (this.signInForm.valid) {
        const payload: User = { idType: this.signInForm.value.idType, userName: this.signInForm.value.userName, password: this.signInForm.value.password };
        if (payload.userName && payload.password) {
          this.loginService.createNewUser({ userName: payload.userName, password: payload.password, idType: payload.idType }, this.users).subscribe({
            next: () => {
              this.router.navigate(["/dashboard"])
            },
            error: (e) => {
              throw new Error(e.message)
            },
            complete: () => {
            }
          })
          this.authService.login(payload?.userName, payload?.password, payload.idType);
        }
      }
    }
    catch (error: any) {
      this.errorMessage = error.message
      console.log(error)
    }
  }


}
