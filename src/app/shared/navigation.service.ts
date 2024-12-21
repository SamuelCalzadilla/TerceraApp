import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class NavigationService {
  private pages: string[] = [
    '/intro/1',
    '/intro/2',
    '/tutorial/1',
    '/tutorial/2',
    '/ejemplos/1',
    '/ejemplos/2',
  ];

  getNextPage(currentUrl: string): string | null {
    const currentIndex = this.pages.indexOf(currentUrl);
    return currentIndex >= 0 && currentIndex < this.pages.length - 1
      ? this.pages[currentIndex + 1]
      : null;
  }

  getPreviousPage(currentUrl: string): string | null {
    const currentIndex = this.pages.indexOf(currentUrl);
    return currentIndex > 0 ? this.pages[currentIndex - 1] : null;
  }
}