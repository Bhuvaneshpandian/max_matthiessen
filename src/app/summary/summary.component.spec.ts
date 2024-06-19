import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component'; // Adjust component import as per your component structure
import { HeaderComponent } from '../shared/header/header.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { PortfolioRecommendationComponent } from './portfolio-recommendation/portfolio-recommendation.component';
import { OverviewComponent } from './overview/overview.component';
import { UpcommingPaymentsComponent } from './upcomming-payments/upcomming-payments.component';
import { NewsComponent } from './news/news.component';
import { MobileDownMenuComponent } from '../shared/mobile-down-menu/mobile-down-menu.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryComponent,HeaderComponent,PortfolioSummaryComponent,PortfolioRecommendationComponent,OverviewComponent,UpcommingPaymentsComponent,NewsComponent,MobileDownMenuComponent], // Ensure all component dependencies are declared here
      imports: [CanvasJSAngularChartsModule]
    })
    .compileComponents(); // Ensure components are compiled

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases as needed
});
