import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroNivel1Component } from './intro-nivel1/intro-nivel1.component';
import { Nivel11Component } from './nivel1-1/nivel1-1.component';
import { Nivel12Component } from './nivel1-2/nivel1-2.component';
import { Nivel13Component } from './nivel1-3/nivel1-3.component';
import { Nivel14Component } from './nivel1-4/nivel1-4.component';
import { Nivel15Component } from './nivel1-5/nivel1-5.component';
import { Nivel16Component } from './nivel1-6/nivel1-6.component';



@NgModule({
  declarations: [
    IntroNivel1Component,
    Nivel11Component,
    Nivel12Component,
    Nivel13Component,
    Nivel14Component,
    Nivel15Component,
    Nivel16Component
  ],
  imports: [
    CommonModule
  ]
})
export class Nivel1Module { }
