import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Importa el componente de inicio
import { PaginaIntro1Component } from './intro/pagina-intro-1/pagina-intro-1.component';
import { PaginaIntro2Component } from './intro/pagina-intro-2/pagina-intro-2.component';
import { PaginaTutorial1Component } from './tutorial/pagina-tutorial-1/pagina-tutorial-1.component';
import { PaginaTutorial2Component } from './tutorial/pagina-tutorial-2/pagina-tutorial-2.component';
import { PaginaEjemplos1Component } from './ejemplos/pagina-ejemplos-1/pagina-ejemplos-1.component';
import { PaginaEjemplos2Component } from './ejemplos/pagina-ejemplos-2/pagina-ejemplos-2.component';


import { IntroNivel1Component } from './nivel1/intro-nivel1/intro-nivel1.component';
import { Nivel11Component } from './nivel1/nivel1-1/nivel1-1.component';
import { Nivel12Component } from './nivel1/nivel1-2/nivel1-2.component';
import { Nivel13Component } from './nivel1/nivel1-3/nivel1-3.component';
import { Nivel14Component } from './nivel1/nivel1-4/nivel1-4.component';
import { Nivel15Component } from './nivel1/nivel1-5/nivel1-5.component';
import { Nivel16Component } from './nivel1/nivel1-6/nivel1-6.component';

import { IntroNivel2Component } from './nivel2/intro-nivel2/intro-nivel2.component';
import { Nivel21Component } from './nivel2/nivel2-1/nivel2-1.component';
import { Nivel22Component } from './nivel2/nivel2-2/nivel2-2.component';
import { Nivel23Component } from './nivel2/nivel2-3/nivel2-3.component';
import { Nivel24Component } from './nivel2/nivel2-4/nivel2-4.component';
import { Nivel25Component } from './nivel2/nivel2-5/nivel2-5.component';
import { Nivel26Component } from './nivel2/nivel2-6/nivel2-6.component';
import { Nivel27Component } from './nivel2/nivel2-7/nivel2-7.component';

import { IntroNivel3Component } from './nivel3/intro-nivel3/intro-nivel3.component';
import { Nivel31Component } from './nivel3/nivel3-1/nivel3-1.component';
import { Nivel32Component } from './nivel3/nivel3-2/nivel3-2.component';
import { Nivel33Component } from './nivel3/nivel3-3/nivel3-3.component';
import { Nivel34Component } from './nivel3/nivel3-4/nivel3-4.component';
import { Nivel35Component } from './nivel3/nivel3-5/nivel3-5.component';
import { Nivel36Component } from './nivel3/nivel3-6/nivel3-6.component';
import { Nivel3FinalComponent } from './nivel3/nivel3-final/nivel3-final.component';



const routes: Routes = [
  // Rutas para el módulo "Nivel1"
  { path: 'nivel1/intro', component: IntroNivel1Component },
  { path: 'nivel1/1', component: Nivel11Component },
  { path: 'nivel1/2', component: Nivel12Component },
  { path: 'nivel1/3', component: Nivel13Component },
  { path: 'nivel1/4', component: Nivel14Component },
  { path: 'nivel1/5', component: Nivel15Component },
  { path: 'nivel1/6', component: Nivel16Component },

  // Rutas para el módulo "Nivel2"
  { path: 'nivel2/intro', component: IntroNivel2Component },
  { path: 'nivel2/1', component: Nivel21Component },
  { path: 'nivel2/2', component: Nivel22Component },
  { path: 'nivel2/3', component: Nivel23Component },
  { path: 'nivel2/4', component: Nivel24Component },
  { path: 'nivel2/5', component: Nivel25Component },
  { path: 'nivel2/6', component: Nivel26Component },
  { path: 'nivel2/7', component: Nivel27Component },

  // Rutas para el módulo "Nivel3"
  { path: 'nivel3/intro', component: IntroNivel3Component },
  { path: 'nivel3/1', component: Nivel31Component },
  { path: 'nivel3/2', component: Nivel32Component },
  { path: 'nivel3/3', component: Nivel33Component },
  { path: 'nivel3/4', component: Nivel34Component },
  { path: 'nivel3/5', component: Nivel35Component },
  { path: 'nivel3/6', component: Nivel36Component },
  { path: 'nivel3/final', component: Nivel3FinalComponent },




    // Ruta para la página de inicio
    { path: '', component: HomeComponent },

    // Rutas para el módulo "Intro"
    { path: 'intro/1', component: PaginaIntro1Component },
    { path: 'intro/2', component: PaginaIntro2Component },
  
    // Rutas para el módulo "Tutorial"
    { path: 'tutorial/1', component: PaginaTutorial1Component },
    { path: 'tutorial/2', component: PaginaTutorial2Component },
  
    // Rutas para el módulo "Ejemplos"
    { path: 'ejemplos/1', component: PaginaEjemplos1Component },
    { path: 'ejemplos/2', component: PaginaEjemplos2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
