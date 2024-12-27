import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel2-2',
  standalone: false,
  
  templateUrl: './nivel2-2.component.html',
  styleUrls: ['./nivel2-2.component.css', '../../app.component.css']
})
export class Nivel22Component {
  code1_nivel2_2 = '@angular/router';
  pre1_nivel2_2 = 
    `import { RouterModule, Routes } from '@angular/router';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';

const routes: Routes = [
  { path: '', component: HolaMundoComponent },
  { path: 'otro', component: OtroComponenteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    OtroComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;
  pre2_nivel2_2 = 
    `<h2>Otro Componente</h2>
<p>Este es otro componente de la aplicación.</p>`;
  pre3_nivel2_2 =
    `<nav>
  <a routerLink="" routerLinkActive="active">Inicio</a> |
  <a routerLink="/otro" routerLinkActive="active">Otro</a>
</nav>
<router-outlet></router-outlet>`;
  pre4_nivel2_2 = 
    `nav a {
    margin-right: 15px;
    text-decoration: none;
    color: #2980b9;
}

nav a.active {
    font-weight: bold;
    color: #2c3e50;
}`;
  pre5_nivel2_2 = 
    `import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const estaAutenticado = false; // Reemplaza con lógica real de autenticación
      if (estaAutenticado) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
  }
  
}`;
  pre6_nivel2_2 = 
    `const routes: Routes = [
  { path: '', component: HolaMundoComponent },
  { path: 'otro', component: OtroComponenteComponent, canActivate: [AuthGuard] }
];`;
  pre7_nivel2_2 = 
    `import { Router } from '@angular/router';

constructor(private dataService: DataService, private router: Router) { }

navegarAOtro(): void {
    this.router.navigate(['/otro']);
}`;


}
