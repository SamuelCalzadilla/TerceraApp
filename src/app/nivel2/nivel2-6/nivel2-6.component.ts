import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel2-6',
  standalone: false,
  
  templateUrl: './nivel2-6.component.html',
  styleUrls: ['./nivel2-6.component.css', '../../app.component.css']
})
export class Nivel26Component {
  pre1 =
    `<div *ngIf="mostrarSeccion">
  <p>Esta sección se muestra si mostrarSeccion es true.</p>
</div>
<button (click)="mostrarSeccion = !mostrarSeccion">Toggle Sección</button>`;
  pre2 = 
    `<ul>
  <li *ngFor="let usuario of usuarios">{{ usuario }}</li>
</ul>`;
  pre3 =
    `estilos: any = {
  color: 'blue',
  fontSize: '20px'
};`;
  pre4 =
    `.destacado {
    background-color: #f1c40f;
    padding: 10px;
}`;
  pre5 =
    `<p [ngClass]="{'destacado': esDestacado}">Este párrafo puede ser destacado.</p>
<button (click)="esDestacado = !esDestacado">Toggle Destacado</button>`;
  pre6 =
    `import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  @Input() appResaltar: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.resaltar(this.appResaltar || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resaltar('');
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`
}
