import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../shared/header/header.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { MobileDownMenuComponent } from '../shared/mobile-down-menu/mobile-down-menu.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent,HeaderComponent,DashboardContentComponent, MobileDownMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
