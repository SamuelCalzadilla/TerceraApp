import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la app
})
export class NavigationService {
  private pages: string[] = [
    '/nivel1/intro',
    '/nivel1/1',
    '/nivel1/2',
    '/nivel1/3',
    '/nivel1/4',
    '/nivel1/5',
    '/nivel1/6',
    '/nivel2/intro',
    '/nivel2/1',
    '/nivel2/2',
    '/nivel2/3',
    '/nivel2/4',
    '/nivel2/5',
    '/nivel2/6',
    '/nivel2/7',
    '/nivel3/intro',
    '/nivel3/1',
    '/nivel3/2',
    '/nivel3/3',
    '/nivel3/4',
    '/nivel3/5',
    '/nivel3/6',
    '/nivel3/final'
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