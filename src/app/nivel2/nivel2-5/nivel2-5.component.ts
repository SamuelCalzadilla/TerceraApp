import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel2-5',
  standalone: false,
  
  templateUrl: './nivel2-5.component.html',
  styleUrls: ['./nivel2-5.component.css', '../../app.component.css']
})
export class Nivel25Component {
  pre1 = `
nuevoPost: any = { title: '', body: '' };

crearNuevoPost(): void {
  if (this.nuevoPost.title && this.nuevoPost.body) {
    this.apiService.crearPost(this.nuevoPost).subscribe(
      data => {
        this.posts.unshift(data);
        this.nuevoPost = { title: '', body: '' };
      },
      error => console.error(error)
    );
  }
}
`;
  pre2 =
    `<h3>Crear Nuevo Post (Template-Driven)</h3>
<form #postForm="ngForm" (ngSubmit)="crearNuevoPost()">
  <div>
    <label for="title">Título:</label>
    <input type="text" id="title" name="title" [(ngModel)]="nuevoPost.title" required />
  </div>
  <div>
    <label for="body">Contenido:</label>
    <textarea id="body" name="body" [(ngModel)]="nuevoPost.body" required></textarea>
  </div>
  <button type="submit" [disabled]="!postForm.form.valid">Crear Post</button>
</form>`;
  pre3 =
    `<form #postForm="ngForm" (ngSubmit)="crearNuevoPost()">
  <div>
    <label for="title">Título:</label>
    <input type="text" id="title" name="title" [(ngModel)]="nuevoPost.title" required minlength="5" />
    <div *ngIf="postForm.controls.title?.invalid && (postForm.controls.title?.dirty || postForm.controls.title?.touched)">
      <small>El título es obligatorio y debe tener al menos 5 caracteres.</small>
    </div>
  </div>
  <div>
    <label for="body">Contenido:</label>
    <textarea id="body" name="body" [(ngModel)]="nuevoPost.body" required></textarea>
    <div *ngIf="postForm.controls.body?.invalid && (postForm.controls.body?.dirty || postForm.controls.body?.touched)">
      <small>El contenido es obligatorio.</small>
    </div>
  </div>
  <button type="submit" [disabled]="!postForm.form.valid">Crear Post</button>
</form>`;
  pre4 =
    `import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  // ... otros códigos
})
export class AppModule { }`;
  pre5 =
    `import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  datos: string[] = [];
  posts: any[] = [];
  nuevoPost: any = { title: '', body: '' };
  formularioActualizar: FormGroup;

  constructor(private dataService: DataService, private apiService: ApiService) { 
    this.formularioActualizar = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      body: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.datos = this.dataService.obtenerDatos();
    this.apiService.obtenerPosts().subscribe(
      data => this.posts = data.slice(0, 5),
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
          this.posts.unshift(data);
          this.nuevoPost = { title: '', body: '' };
        },
        error => console.error(error)
      );
    }
  }

  actualizarPost(post: any): void {
    this.formularioActualizar.setValue({
      title: post.title,
      body: post.body
    });
    // Lógica para enviar la actualización
  }
}`;
  pre6 =
    `<h2>{{ mensaje }}</h2>
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
    <button (click)="actualizarPost(post)">Actualizar Post</button>
  </li>
</ul>

<h3>Crear Nuevo Post (Template-Driven)</h3>
<form #postForm="ngForm" (ngSubmit)="crearNuevoPost()">
  <div>
    <label for="title">Título:</label>
    <input type="text" id="title" name="title" [(ngModel)]="nuevoPost.title" required minlength="5" />
    <div *ngIf="postForm.controls.title?.invalid && (postForm.controls.title?.dirty || postForm.controls.title?.touched)">
      <small>El título es obligatorio y debe tener al menos 5 caracteres.</small>
    </div>
  </div>
  <div>
    <label for="body">Contenido:</label>
    <textarea id="body" name="body" [(ngModel)]="nuevoPost.body" required></textarea>
    <div *ngIf="postForm.controls.body?.invalid && (postForm.controls.body?.dirty || postForm.controls.body?.touched)">
      <small>El contenido es obligatorio.</small>
    </div>
  </div>
  <button type="submit" [disabled]="!postForm.form.valid">Crear Post</button>
</form>

<h3>Actualizar Post (Reactive Form)</h3>
<form [formGroup]="formularioActualizar" (ngSubmit)="actualizarPostSubmit()">
  <div>
    <label for="title">Título:</label>
    <input id="title" formControlName="title" />
    <div *ngIf="formularioActualizar.controls.title?.invalid && (formularioActualizar.controls.title?.dirty || formularioActualizar.controls.title?.touched)">
      <small>El título es obligatorio y debe tener al menos 5 caracteres.</small>
    </div>
  </div>
  <div>
    <label for="body">Contenido:</label>
    <textarea id="body" formControlName="body"></textarea>
    <div *ngIf="formularioActualizar.controls.body?.invalid && (formularioActualizar.controls.body?.dirty || formularioActualizar.controls.body?.touched)">
      <small>El contenido es obligatorio.</small>
    </div>
  </div>
  <button type="submit" [disabled]="!formularioActualizar.valid">Actualizar Post</button>
</form>`;
  pre7 =
    `actualizarPostSubmit(): void {
  if (this.formularioActualizar.valid) {
    const updatedPost = this.formularioActualizar.value;
    // Supongamos que tienes un método para actualizar el post en el servicio
    this.apiService.actualizarPost(updatedPost).subscribe(
      data => {
        // Actualiza la lista de posts con los nuevos datos
        const index = this.posts.findIndex(p => p.id === data.id);
        if (index !== -1) {
          this.posts[index] = data;
        }
        this.formularioActualizar.reset();
      },
      error => console.error(error)
    );
  }
}`
}
