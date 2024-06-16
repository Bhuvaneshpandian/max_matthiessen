import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDownMenuComponent } from './mobile-down-menu.component';

describe('MobileDownMenuComponent', () => {
  let component: MobileDownMenuComponent;
  let fixture: ComponentFixture<MobileDownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
