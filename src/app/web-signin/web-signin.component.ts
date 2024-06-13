import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-signin',
  templateUrl: './web-signin.component.html',
  styleUrls: ['./web-signin.component.css']
})
export class WebSigninComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({}); // Initialize inline or in constructor

  constructor(private formBuilder: FormBuilder,private router:Router) {

  }
  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      authenticationType: ['bankId', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if (this.signInForm.valid) {
      const payload = {
        authenticationType: this.signInForm.value.authenticationType,
        userName: this.signInForm.value.userName,
        password: this.signInForm.value.password
      };
      this.router.navigate(["/dashboard"])

    } else {
      console.error('Form submission failed. Please check validation errors.');
    }
  }
  }


