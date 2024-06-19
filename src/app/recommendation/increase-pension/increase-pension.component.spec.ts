import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FormsModule } from '@angular/forms';
import { IncreasePensionComponent } from './increase-pension.component';

describe('IncreasePensionComponent', () => {
  let component: IncreasePensionComponent;
  let fixture: ComponentFixture<IncreasePensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreasePensionComponent ],
      imports:[CanvasJSAngularChartsModule,FormsModule]

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
