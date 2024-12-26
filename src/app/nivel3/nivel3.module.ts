import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroNivel3Component } from './intro-nivel3/intro-nivel3.component';
import { Nivel31Component } from './nivel3-1/nivel3-1.component';
import { Nivel32Component } from './nivel3-2/nivel3-2.component';
import { Nivel33Component } from './nivel3-3/nivel3-3.component';
import { Nivel34Component } from './nivel3-4/nivel3-4.component';
import { Nivel35Component } from './nivel3-5/nivel3-5.component';
import { Nivel36Component } from './nivel3-6/nivel3-6.component';
import { Nivel3FinalComponent } from './nivel3-final/nivel3-final.component';



@NgModule({
  declarations: [
    IntroNivel3Component,
    Nivel31Component,
    Nivel32Component,
    Nivel33Component,
    Nivel34Component,
    Nivel35Component,
    Nivel36Component,
    Nivel3FinalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Nivel3Module { }
