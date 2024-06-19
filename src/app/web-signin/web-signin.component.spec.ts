import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
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
  let authService: jasmine.SpyObj<AuthService>;
  let loginService: jasmine.SpyObj<LoginServiceService>;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [ WebSigninComponent,FormGroupDirective ],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: LoginServiceService, useValue: loginServiceSpy },
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSigninComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    loginService = TestBed.inject(LoginServiceService) as jasmine.SpyObj<LoginService>;
    router = TestBed.inject(Router);
    navigateSpy = router.navigate as jasmine.Spy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard on successful login',(() => {
    component.signInForm.patchValue({
      userName: 'testUser',
      password: 'testPassword',
      idType: 'defaultIdType'
    });

    component.onSubmit();
    tick()
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  }));

});
