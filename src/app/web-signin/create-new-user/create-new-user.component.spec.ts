import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewUserComponent } from './create-new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective } from '@angular/forms';

describe('CreateNewUserComponent', () => {
  let component: CreateNewUserComponent;
  let fixture: ComponentFixture<CreateNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewUserComponent,FormGroupDirective],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
