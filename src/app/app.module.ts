import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Router, NavigationEnd } from '@angular/router'; // Asegúrate de importar Router y NavigationEnd

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
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
  constructor(router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    // Habilitar scrollRestoration solo en el navegador
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0); // Asegurarse de que el scroll esté en la parte superior al finalizar la navegación
      }
    });
  }
}