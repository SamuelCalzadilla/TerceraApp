import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaTutorial1Component } from './pagina-tutorial-1/pagina-tutorial-1.component';
import { PaginaTutorial2Component } from './pagina-tutorial-2/pagina-tutorial-2.component';



@NgModule({
  declarations: [
    PaginaTutorial1Component,
    PaginaTutorial2Component
  ],
  imports: [
    CommonModule
  ]
})
export class TutorialModule { }
