import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Importa el componente de inicio
import { PaginaIntro1Component } from './intro/pagina-intro-1/pagina-intro-1.component';
import { PaginaIntro2Component } from './intro/pagina-intro-2/pagina-intro-2.component';
import { PaginaTutorial1Component } from './tutorial/pagina-tutorial-1/pagina-tutorial-1.component';
import { PaginaTutorial2Component } from './tutorial/pagina-tutorial-2/pagina-tutorial-2.component';
import { PaginaEjemplos1Component } from './ejemplos/pagina-ejemplos-1/pagina-ejemplos-1.component';
import { PaginaEjemplos2Component } from './ejemplos/pagina-ejemplos-2/pagina-ejemplos-2.component';

const routes: Routes = [
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
