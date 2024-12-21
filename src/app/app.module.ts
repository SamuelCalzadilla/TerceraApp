import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Router, NavigationEnd } from '@angular/router'; // Asegúrate de importar Router y NavigationEnd

import { SharedModule } from './shared/shared.module';
import { PaginaEjemplos1Component } from './ejemplos/pagina-ejemplos-1/pagina-ejemplos-1.component';
import { PaginaEjemplos2Component } from './ejemplos/pagina-ejemplos-2/pagina-ejemplos-2.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaEjemplos1Component,
    PaginaEjemplos2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule 
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Habilitar scrollRestoration
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Asegurarse de que el scroll esté en la parte superior al finalizar la navegación
      }
    });
  }
}