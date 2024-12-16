import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ScrollToBottomComponent } from './scroll-to-bottom/scroll-to-bottom.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PreviousPageComponent } from './previous-page/previous-page.component';
import { NextPageComponent } from './next-page/next-page.component';



@NgModule({
  declarations: [
    ScrollToTopComponent,
    ScrollToBottomComponent,
    SideMenuComponent,
    PreviousPageComponent,
    NextPageComponent
  ],
  imports: [
    CommonModule,  // Para usar las directivas comunes como `ngIf` y `ngFor`.
    RouterModule // Necesario para utilizar [routerLink]
  ],
  exports: [
    ScrollToTopComponent,
    ScrollToBottomComponent,
    SideMenuComponent,
    PreviousPageComponent,
    NextPageComponent
  ]
})
export class SharedModule { }