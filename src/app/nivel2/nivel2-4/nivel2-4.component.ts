import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel2-4',
  standalone: false,
  
  templateUrl: './nivel2-4.component.html',
  styleUrls: ['./nivel2-4.component.css', '../../app.component.css']
})
export class Nivel24Component {
  angular = '@angular';
  pre1 = `import { HttpClientModule } from '@angular/common/http';`;
  pre2 = 
    `@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    OtroComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;
  pre3 = `
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  obtenerPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.manejarError)
      );
  }

  crearPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post)
      .pipe(
        catchError(this.manejarError)
      );
  }

  private manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error del cliente:', error.error.message);
    } else {
      console.error(\`Código de error del servidor: \${error.status}, \` + \`Mensaje: \${error.message}\`);
    }
    return throwError('Algo salió mal; por favor, intenta de nuevo más tarde.');
  }
}`;
pre4 = `
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  datos: string[] = [];
  posts: any[] = [];
  nuevoPost: any = { title: '', body: '' };

  constructor(private dataService: DataService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.datos = this.dataService.obtenerDatos();
    this.apiService.obtenerPosts().subscribe(
      data => this.posts = data.slice(0, 5), // Obtener los primeros 5 posts
      error => console.error(error)
    );
  }

  mensaje: string = "¡Bienvenido al binding de datos!";

  cambiarMensaje(nuevoMensaje: string): void {
    this.mensaje = nuevoMensaje;
  }

  nombre: string = "Angular";

  enviarNotificacion(): void {
    // Implementación previa
  }

  crearNuevoPost(): void {
    if (this.nuevoPost.title && this.nuevoPost.body) {
      this.apiService.crearPost(this.nuevoPost).subscribe(
        data => {
          this.posts.unshift(data); // Agregar el nuevo post al inicio de la lista
          this.nuevoPost = { title: '', body: '' };
        },
        error => console.error(error)
      );
    }
  }
}`;
pre5 = `
<h2>{{ mensaje }}</h2>
<button (click)="cambiarMensaje('Has actualizado el mensaje!')">Cambiar Mensaje</button>

<input [(ngModel)]="nombre" placeholder="Escribe tu nombre"/>
<p>Hola, {{ nombre }}!</p>

<h3>Datos del Servicio:</h3>
<ul>
  <li *ngFor="let dato of datos">{{ dato }}</li>
</ul>

<h3>Posts de la API:</h3>
<ul>
  <li *ngFor="let post of posts">
    <strong>{{ post.title }}</strong>
    <p>{{ post.body }}</p>
  </li>
</ul>

<h3>Crear Nuevo Post:</h3>
<input [(ngModel)]="nuevoPost.title" placeholder="Título" />
<textarea [(ngModel)]="nuevoPost.body" placeholder="Contenido"></textarea>
<button (click)="crearNuevoPost()">Crear Post</button>
`;
pre6 = `
private manejarError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('Error del cliente:', error.error.message);
  } else {
    console.error(\`Código de error del servidor: \${error.status}, \` + \`Mensaje: \${error.message}\`);
  }
  return throwError('Algo salió mal; por favor, intenta de nuevo más tarde.');
}
`;
  pre7 =
  `this.apiService.obtenerPosts().subscribe(
  data => this.posts = data.slice(0, 5),
  error => {
    console.error(error);
    // Mostrar un mensaje de error al usuario
    this.mensaje = "No se pudieron cargar los posts. Inténtalo más tarde.";
  }
);`

}
