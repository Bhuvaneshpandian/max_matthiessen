import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingPaymentsComponent } from './upcomming-payments.component';

describe('UpcommingPaymentsComponent', () => {
  let component: UpcommingPaymentsComponent;
  let fixture: ComponentFixture<UpcommingPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
