import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionReccommendationPopupComponent } from './pension-reccommendation-popup.component';

describe('PensionReccommendationPopupComponent', () => {
  let component: PensionReccommendationPopupComponent;
  let fixture: ComponentFixture<PensionReccommendationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionReccommendationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionReccommendationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
