import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    SharedModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
