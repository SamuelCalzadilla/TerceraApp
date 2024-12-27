import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel1-6',
  standalone: false,
  
  templateUrl: './nivel1-6.component.html',
  styleUrls: ['./nivel1-6.component.css', '../../app.component.css']
})
export class Nivel16Component {
  code1_nivel_6 = '{{ propiedad }}';
  pre1_nivel1_6 = '<p> {{ mensaje }} </p>';
  pre2_nivel1_6 = '<img [src]="srcImagen" alt="Imagen de Ejemplo">';
  pre3_nivel1_6 = 
    `cambiarMensaje(): void {
this.mensaje = "El mensaje ha sido cambiado por un evento!";
}`;
  pre4_nivel1_6 = '<button (click)="cambiarMensaje()">Cambiar Mensaje</button>';
  pre5_nivel1_6 = 
    `import { FormsModule } from '@angular/forms';

@NgModule({
declarations: [
AppComponent,
HolaMundoComponent
],
imports: [
BrowserModule,
FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }`;
pre6_nivel1_6 = 
    `<input [(ngModel)]="nombre" placeholder="Escribe tu nombre">
<p>Hola, {{ nombre }} </p>;`;
pre7_nivel1_6 =
`<ul>
<li *ngFor="let item of items"> {{ item }} </li>
</ul>`
}
