import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-ejemplos-2',
  standalone: false,
  
  templateUrl: './pagina-ejemplos-2.component.html',
  styleUrls: ['./pagina-ejemplos-2.component.css', '../../app.component.css']
})
export class PaginaEjemplos2Component {
  pre1_ejemplos2 = 'npm install -g @angular/cli@latest';
  pre2_ejemplos2 = 'ng update @angular/cli @angular/core';
  pre3_ejemplos2 = 
    `// Antes
    import { Http } from '@angular/http';

    // Después
    import { HttpClient } from '@angular/common/http';`;
  code1_ejemplos2 = '@angular/http';
  code2_ejemplos2 = '@angular/common/http'
  pre4_ejemplos2 = 
    `ng update @ngrx/store
    ng update @angular/material`;
  pre5_ejemplos2 = 
    `ng test
    ng e2e`;
  pre6_ejemplos2 = 
    `// Antes
    import { Http } from '@angular/http';

    @Injectable({
      providedIn: 'root'
    })
    export class ApiService {
      constructor(private http: Http) { }

      obtenerDatos() {
        return this.http.get('/api/datos');
      }
    }

    // Después
    import { HttpClient } from '@angular/common/http';

    @Injectable({
      providedIn: 'root'
    })
    export class ApiService {
      constructor(private http: HttpClient) { }

      obtenerDatos() {
        return this.http.get('/api/datos');
      }
    }`
    arroba = '@';
    abrir_corchete = '{';
    cerrar_corchete = '}';
}
