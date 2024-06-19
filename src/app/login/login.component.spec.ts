import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { WebViewComponent } from '../web-view/web-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { WebSigninComponent } from '../web-signin/web-signin.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupDirective } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent,WebViewComponent,WebSigninComponent,FormGroupDirective],
      imports:[MatTabsModule,HttpClientModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
