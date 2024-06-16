import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-web-signin',
  templateUrl: './web-signin.component.html',
  styleUrls: ['./web-signin.component.css']
})
export class WebSigninComponent implements OnInit {

  signInForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {

  }
  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      authenticationType: ['bankId', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const payload: User = { authenticationType: this.signInForm.value.authenticationType, userName: this.signInForm.value.userName, password: this.signInForm.value.password };
      if (payload.userName && payload.password) {
        this.authService.login(payload?.userName, payload.password);
      }
      this.router.navigate(["/dashboard"])
      return;
    }
    this.router.navigate(["/login"])

  }
}


