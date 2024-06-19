import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { IncreasePensionComponent } from './increase-pension/increase-pension.component';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    IncreasePensionComponent
  ],
  imports: [
    CommonModule,
    CanvasJSAngularChartsModule,
    FormsModule

  ],
  exports: [
    IncreasePensionComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RecommendationModule { }
