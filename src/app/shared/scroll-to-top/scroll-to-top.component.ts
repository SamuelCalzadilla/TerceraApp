import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  standalone: false,
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  isVisible: boolean = false; // Controla la visibilidad del botón

  // Escucha el evento de scroll en la ventana
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Muestra el botón si la posición del scroll es mayor a 20px
    this.isVisible = window.pageYOffset > 20;
  }

  // Método para hacer scroll hacia arriba
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}