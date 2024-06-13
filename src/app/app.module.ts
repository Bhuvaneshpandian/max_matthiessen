

// @ts-ignore

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryComponent } from './summary/summary.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { OverviewComponent } from './overview/overview.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { UpcommingPaymentsComponent } from './upcomming-payments/upcomming-payments.component';
import { NewsComponent } from './news/news.component';
import { PortfolioRecommendationComponent } from './portfolio-recommendation/portfolio-recommendation.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { IncreasePensionComponent } from './increase-pension/increase-pension.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WebViewComponent } from './web-view/web-view.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WebSigninComponent } from './web-signin/web-signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    SummaryComponent,
    LoginHeaderComponent,
    OverviewComponent,
    PortfolioSummaryComponent,
    UpcommingPaymentsComponent,
    NewsComponent,
    PortfolioRecommendationComponent,
    RecommendationComponent,
    IncreasePensionComponent,
    DonutChartComponent,
    LoginComponent,
    WebViewComponent,
    WebSigninComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
