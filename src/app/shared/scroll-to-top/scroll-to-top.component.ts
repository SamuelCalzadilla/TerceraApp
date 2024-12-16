import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  standalone: false,
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  // Método para hacer scroll hacia arriba
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}