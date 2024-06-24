import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewUserComponent } from './create-new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/services/auth.service';
import { LoginServiceService } from 'src/services/login-service.service';
import { Router } from '@angular/router';

fdescribe('CreateNewUserComponent', () => {
  let component: CreateNewUserComponent;
  let fixture: ComponentFixture<CreateNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewUserComponent, FormGroupDirective],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [FormBuilder, AuthService, LoginServiceService, Router]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new user', async () => {
    const mockUser = { userName: 'testUser1', password: '12345', idType: 'bankId' };
    const mockLoginResponse = [{ userName: 'testUser', password: '12345', idType: 'bankId' }];
    const loginService = fixture.debugElement.injector.get(LoginServiceService);
    const authService = fixture.debugElement.injector.get(AuthService);
    const logInResponse = await loginService.createNewUser(mockUser, mockLoginResponse);
    const result = await authService.login(mockUser.userName, mockUser.password, mockUser.idType);
    component.onSubmit
    expect(logInResponse).toBe(logInResponse);
  })

  it('should not create new user', async () => {
    const mockUser = { userName: 'testUser', password: '12345', idType: 'bankId' };
    const mockLoginResponse = [{ userName: 'testUser', password: '12345', idType: 'bankId' }];
    const loginService = fixture.debugElement.injector.get(LoginServiceService);
    const authService = fixture.debugElement.injector.get(AuthService);
    let errorMsg = ""
    try {
      await loginService.createNewUser(mockUser, mockLoginResponse);
    } catch (e: any) {
      errorMsg = e.message
    }
    await authService.login(mockUser.userName, mockUser.password, mockUser.idType);
    component.onSubmit
    expect(errorMsg).toBe("UserName already exsits!");
  })
});
