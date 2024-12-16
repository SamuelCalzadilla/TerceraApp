import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaIntro1Component } from './pagina-intro-1/pagina-intro-1.component';
import { PaginaIntro2Component } from './pagina-intro-2/pagina-intro-2.component';



@NgModule({
  declarations: [
    PaginaIntro1Component,
    PaginaIntro2Component
  ],
  imports: [
    CommonModule
  ]
})
export class IntroModule { }
