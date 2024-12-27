import { Component, output } from '@angular/core';

@Component({
  selector: 'app-nivel2-3',
  standalone: false,
  
  templateUrl: './nivel2-3.component.html',
  styleUrls: ['./nivel2-3.component.css', '../../app.component.css']
})
export class Nivel23Component {
  input = '@Input';
  output = '@Output';
  pre1 = '<app-hola-mundo [mensaje]="mensajePadre"></app-hola-mundo>'
  pre2 =
    `import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  @Input() mensaje: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // ... otras propiedades y métodos
}`;
  pre3 = '<h2>{{ mensaje }}</h2>';
  pre4 = 
    `import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  @Input() mensaje: string = "";
  @Output() notificar: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarNotificacion(): void {
    this.notificar.emit('¡Notificación desde el hijo!');
  }

  // ... otras propiedades y métodos
}`;
  pre5 = '<button (click)="enviarNotificacion()">Enviar Notificación</button>';
  pre6 = '<app-hola-mundo [mensaje]="mensajePadre" (notificar)="manejarNotificacion($event)"></app-hola-mundo>';
  pre7 = 
    `manejadorNotificacion(evento: string): void {
  alert(evento);
}`;
  pre8 = 
    `import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mensajeSubject = new Subject<string>();
  mensaje$ = this.mensajeSubject.asObservable();

  enviarMensaje(mensaje: string): void {
    this.mensajeSubject.next(mensaje);
  }

  obtenerDatos(): string[] {
    return ["Dato 1", "Dato 2", "Dato 3"];
  }
}`;
  pre9 = 
    `import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {

  constructor(private dataService: DataService) { }

  enviarMensaje(): void {
    this.dataService.enviarMensaje('Mensaje desde Componente A');
  }
}`;
  pre10 =
    `import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {
  mensajeRecibido: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.mensaje$.subscribe(mensaje => {
      this.mensajeRecibido = mensaje;
    });
  }
}`;
  pre11 = '<p>Mensaje Recibido: {{ mensajeRecibido }}</p>';
    

}
