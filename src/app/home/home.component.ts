import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Método para mostrar la descripción correspondiente
  showDescription(level: number) {
    // Ocultar todas las descripciones primero
    const descriptions = document.querySelectorAll('.level-info');
    descriptions.forEach((desc) => {
      (desc as HTMLElement).style.display = 'none';
    });

    // Mostrar la descripción correspondiente
    const levelDescription = document.getElementById(`level-${level}`);
    if (levelDescription) {
      (levelDescription as HTMLElement).style.display = 'block';
    }
  }

  // Método para ocultar las descripciones cuando el ratón sale
  hideDescription() {
    const descriptions = document.querySelectorAll('.level-info');
    descriptions.forEach((desc) => {
      (desc as HTMLElement).style.display = 'none';
    });
  }
}