import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel1-5',
  standalone: false,
  
  templateUrl: './nivel1-5.component.html',
  styleUrls: ['./nivel1-5.component.css', '../../app.component.css']
})
export class Nivel15Component {
  strong1_nivel1_5 = 'Decorador @Component:';
  pre1_nivel1_5 = 
  `import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-hola-mundo',
templateUrl: './hola-mundo.component.html',
styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}

}`;
  pre2_nivel1_5 = 
    `export class HolaMundoComponent implements OnInit {
mensaje: string = "¡Hola Mundo! Este es mi primer componente.";

constructor() { }

ngOnInit(): void {
}

actualizarMensaje(nuevoMensaje: string): void {
this.mensaje = nuevoMensaje;
}
}`;
  pre3_nivel1_5 = 
    `<h2>{{ mensaje }}</h2>
<button (click)="actualizarMensaje('Has actualizado el mensaje!')">Actualizar Mensaje</button>;`;
  pre4_nivel1_5 = 
  `h2 {
color: #27ae60;
}

button {
margin-top: 10px;
}`
}
