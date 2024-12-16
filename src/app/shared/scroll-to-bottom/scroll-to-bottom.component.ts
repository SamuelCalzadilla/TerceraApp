import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-bottom',
  templateUrl: './scroll-to-bottom.component.html',
  standalone: false,
  styleUrls: ['./scroll-to-bottom.component.css']
})
export class ScrollToBottomComponent {
  // Método para hacer scroll hacia abajo
  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}