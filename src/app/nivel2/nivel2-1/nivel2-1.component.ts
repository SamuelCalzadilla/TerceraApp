import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel2-1',
  standalone: false,
  
  templateUrl: './nivel2-1.component.html',
  styleUrls: ['./nivel2-1.component.css', '../../app.component.css']
})
export class Nivel21Component {
  pre1_nivel2_1 = 
    `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  obtenerDatos(): string[] {
    return ["Dato 1", "Dato 2", "Dato 3"];
  }
}`;
  code1_nivel2_1  = '@Injectable';
  pre2_nivel2_1 = 
    `import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  datos: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.datos = this.dataService.obtenerDatos();
  }

  mensaje: string = "¡Bienvenido al binding de datos!";

  cambiarMensaje(nuevoMensaje: string): void {
    this.mensaje = nuevoMensaje;
  }

  nombre: string = "Angular";
}`;
  pre3_nivel2_1 = 
  `<h2>{{ mensaje }}</h2>
<button (click)="cambiarMensaje('Has actualizado el mensaje!')">Cambiar Mensaje</button>

<input [(ngModel)]="nombre" placeholder="Escribe tu nombre"/>
<p>Hola, {{ nombre }}!</p>

<h3>Datos del Servicio:</h3>
<ul>
  <li *ngFor="let dato of datos">{{ dato }}</li>
</ul>`;
}
