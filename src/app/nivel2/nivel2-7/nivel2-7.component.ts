import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel2-7',
  standalone: false,
  
  templateUrl: './nivel2-7.component.html',
  styleUrls: ['./nivel2-7.component.css', '../../app.component.css']
})
export class Nivel27Component {
  code1 = '{{ valor | pipeName }}';
  pre1 = `<p>Fecha actual: {{ today | date:'fullDate' }}</p>`;
  pre2 = 
    `<p>Original: {{ nombre }}</p>
<p>Mayúsculas: {{ nombre | uppercase }}</p>
<p>Minúsculas: {{ nombre | lowercase }}</p>`;
  pre3 = `<p>Precio: {{ precio | currency:'USD' }}</p>`;
  pre4 = `
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.replace(/\\b\\w/g, letra => letra.toUpperCase());
  }

}
`;
  pre5 = '<p>Nombre Capitalizado: {{ nombre | capitalizar }}</p>';
  pre6 = `<p>Fecha y Precio Formateados: {{ today | date:'shortDate' | uppercase }} - {{ precio | currency:'EUR' | uppercase }}</p>`
}
