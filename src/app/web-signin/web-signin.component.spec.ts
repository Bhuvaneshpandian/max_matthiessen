import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WebSigninComponent } from './web-signin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { LoginServiceService } from 'src/services/login-service.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
describe('WebSigninComponent', () => {
  let component: WebSigninComponent;
  let fixture: ComponentFixture<WebSigninComponent>;
  let mockLoginService: jasmine.SpyObj<LoginServiceService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [ WebSigninComponent,FormGroupDirective ],
      providers: [FormBuilder,AuthService,LoginServiceService,Router]
    })
    .compileComponents();
    fixture = TestBed.createComponent(WebSigninComponent);
    component = fixture.componentInstance;
    mockLoginService = TestBed.inject(LoginServiceService) as jasmine.SpyObj<LoginServiceService>;
    mockAuthService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    mockRouter = TestBed.inject(Router) as Router;
    fixture.detectChanges();
    spyOn(mockLoginService, 'login').and.returnValue(of({ success: true }));
spyOn(mockAuthService, 'login').and.returnValue(Promise.resolve());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set canShowLoader to true, call services, and navigate to dashboard on successful submit', fakeAsync(() => {
    // Arrange
    component.signInForm.setValue({
      idType: 'someIdType',
      userName: 'testUser',
      password: 'testPassword'
    });
    component.onSubmit();
    tick();
    expect(mockLoginService.login).toHaveBeenCalledOnceWith(
      {
      userName: 'testUser',
      password: 'testPassword',
      idType: 'someIdType'
    },
    {userName: 'testUser',
    password: 'testPassword',
    idType: 'someIdType'}
  );
    expect(mockAuthService.login).toHaveBeenCalledOnceWith('testUser', 'testPassword', 'someIdType');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(component.canShowLoader).toBeFalse();
    expect(component.loginError).toBeUndefined();
  }));


});



