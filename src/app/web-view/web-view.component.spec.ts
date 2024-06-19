import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebViewComponent } from './web-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { WebSigninComponent } from '../web-signin/web-signin.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupDirective } from '@angular/forms';
describe('WebViewComponent', () => {
  let component: WebViewComponent;
  let fixture: ComponentFixture<WebViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebViewComponent,WebSigninComponent,FormGroupDirective ],
      imports:[MatTabsModule,HttpClientModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
