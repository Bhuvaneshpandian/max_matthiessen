import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WebSigninComponent } from './web-signin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { LoginServiceService } from 'src/services/login-service.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

fdescribe('WebSigninComponent', () => {
  let component: WebSigninComponent;
  let fixture: ComponentFixture<WebSigninComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [WebSigninComponent, FormGroupDirective],
      providers: [FormBuilder, AuthService, LoginServiceService, Router]
    })
      .compileComponents();
    fixture = TestBed.createComponent(WebSigninComponent);
    component = fixture.componentInstance;
    let formBuilder = TestBed.inject(FormBuilder);

    component.signInForm = formBuilder.group({
      idType: ['bankId'],
      userName: ['testUser'],
      password: ['12345']
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sign in', async () => {
    const mockUser = { userName: 'testUser', password: '12345', idType: 'bankId' };
    const mockLoginResponse = [{ userName: 'testUser', password: '12345', idType: 'bankId' }];
    const loginService = fixture.debugElement.injector.get(LoginServiceService);
    const authService = fixture.debugElement.injector.get(AuthService);
    const logInResponse = await loginService.login(mockUser, mockLoginResponse);
    await authService.login(mockUser.userName, mockUser.password, mockUser.idType);
    component.onSubmit
    expect(logInResponse).toBe('Login Successfully');
    expect(component.loginError).toBe('');
    expect(component.canShowLoader).toBe(false);
  })

  it('should not sig in', async () => {
    const mockUser = { userName: 'testUser', password: '12345', idType: 'bankId' };
    const mockLoginResponse = [{ userName: 'testUser1', password: '12345', idType: 'userId' }];
    const loginService = fixture.debugElement.injector.get(LoginServiceService);
    let errorMsg = ""
    try {
      await loginService.login(mockUser, mockLoginResponse);
    } catch (e: any) {
      errorMsg = e.message
    }
    expect(errorMsg).toBe('User not found please check username and password')
    expect(component.canShowLoader).toBe(false);
  })



});



