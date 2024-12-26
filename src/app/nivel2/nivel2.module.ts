import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroNivel2Component } from './intro-nivel2/intro-nivel2.component';
import { Nivel21Component } from './nivel2-1/nivel2-1.component';
import { Nivel22Component } from './nivel2-2/nivel2-2.component';
import { Nivel23Component } from './nivel2-3/nivel2-3.component';
import { Nivel24Component } from './nivel2-4/nivel2-4.component';
import { Nivel25Component } from './nivel2-5/nivel2-5.component';
import { Nivel26Component } from './nivel2-6/nivel2-6.component';
import { Nivel27Component } from './nivel2-7/nivel2-7.component';



@NgModule({
  declarations: [
    IntroNivel2Component,
    Nivel21Component,
    Nivel22Component,
    Nivel23Component,
    Nivel24Component,
    Nivel25Component,
    Nivel26Component,
    Nivel27Component
  ],
  imports: [
    CommonModule
  ]
})
export class Nivel2Module { }
