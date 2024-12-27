import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-next-page',
  standalone: false,
  
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css', '../../app.component.css']
})

export class NextPageComponent {
  nextPage: string | null = null;

  constructor(private router: Router, private navService: NavigationService) {
    this.router.events.subscribe(() => {
      this.updateNextPage();
    });
    this.updateNextPage();
  }

  private updateNextPage(): void {
    const currentUrl = this.router.url;
    this.nextPage = this.navService.getNextPage(currentUrl);
  }

  goToNextPage(): void {
    if (this.nextPage) {
      this.router.navigateByUrl(this.nextPage);
    }
  }
}