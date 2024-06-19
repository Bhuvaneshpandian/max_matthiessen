import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MobileDownMenuComponent } from './mobile-down-menu/mobile-down-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MobileDownMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MobileDownMenuComponent
    ],

})
export class SharedModule { }
