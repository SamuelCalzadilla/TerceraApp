import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-previous-page',
  standalone: false,
  
  templateUrl: './previous-page.component.html',
  styleUrls: ['./previous-page.component.css', '../../app.component.css']
})

export class PreviousPageComponent {
  previousPage: string | null = null;
  isFirstPage: boolean = false; // Para verificar si estamos en la primera página


  constructor(private router: Router, private navService: NavigationService) {
    this.router.events.subscribe(() => {
      this.updatePreviousPage();
    });
    this.updatePreviousPage();
  }

  private updatePreviousPage(): void {
    const currentUrl = this.router.url;
    this.previousPage = this.navService.getPreviousPage(currentUrl);
    // Verificamos si estamos en la primera página
    this.isFirstPage = !this.previousPage; 
  }

  goToPreviousPage(): void {
    if (this.previousPage) {
      this.router.navigateByUrl(this.previousPage);
    }
  }
}