import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreasePensionComponent } from './increase-pension.component';

describe('IncreasePensionComponent', () => {
  let component: IncreasePensionComponent;
  let fixture: ComponentFixture<IncreasePensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreasePensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreasePensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
