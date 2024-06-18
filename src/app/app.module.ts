

// @ts-ignore
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { OverviewComponent } from './summary/overview/overview.component';
import { PortfolioSummaryComponent } from './summary/portfolio-summary/portfolio-summary.component';
import { UpcommingPaymentsComponent } from './summary/upcomming-payments/upcomming-payments.component';
import { NewsComponent } from './summary/news/news.component';
import { PortfolioRecommendationComponent } from './summary/portfolio-recommendation/portfolio-recommendation.component';
import { IncreasePensionComponent } from './recommendation/increase-pension/increase-pension.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WebViewComponent } from './web-view/web-view.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WebSigninComponent } from './web-signin/web-signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MobileDownMenuComponent } from './shared/mobile-down-menu/mobile-down-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { PensionReccommendationPopupComponent } from './recommendation/pension-reccommendation-popup/pension-reccommendation-popup.component';
import { SuccessPopupComponent } from './recommendation/success-popup/success-popup.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SummaryComponent,
    OverviewComponent,
    PortfolioSummaryComponent,
    UpcommingPaymentsComponent,
    NewsComponent,
    PortfolioRecommendationComponent,
    IncreasePensionComponent,
    LoginComponent,
    WebViewComponent,
    WebSigninComponent,
    MobileDownMenuComponent,
    RecommendationComponent,
    PensionReccommendationPopupComponent,
    SuccessPopupComponent,
    DashboardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
