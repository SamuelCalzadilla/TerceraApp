import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-ejemplos-1',
  standalone: false,
  
  templateUrl: './pagina-ejemplos-1.component.html',
  styleUrls: ['./pagina-ejemplos-1.component.css', '../../app.component.css']
})
export class PaginaEjemplos1Component {
  arroba = '@';
  abrir_corchete = '{';
  cerrar_corchete = '}';
}
