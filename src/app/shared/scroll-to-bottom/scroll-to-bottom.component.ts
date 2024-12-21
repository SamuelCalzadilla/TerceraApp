import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-bottom',
  templateUrl: './scroll-to-bottom.component.html',
  standalone: false,
  styleUrls: ['./scroll-to-bottom.component.css']
})
export class ScrollToBottomComponent {
  isVisible: boolean = true; // Controla la visibilidad del botón

  // Escucha el evento de scroll en la ventana
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const pageHeight = document.body.scrollHeight;
    const threshold = 50; // Umbral para considerar la cercanía al final

    // Si estás cerca del final, oculta el botón
    this.isVisible = pageHeight - scrollPosition > threshold;
  }

  // Método para hacer scroll hacia abajo
  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}