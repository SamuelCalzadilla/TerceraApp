import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TeceraApp';
    showSharedComponents: boolean = true; // Controla si los componentes compartidos están visibles

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Suscribirse a los cambios de la ruta
    this.router.events.subscribe(() => {
      // Oculta los componentes compartidos en la página de inicio
      this.showSharedComponents = this.router.url !== '/'; 
    });
  }
}
