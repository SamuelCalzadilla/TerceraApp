import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel3-3',
  standalone: false,
  
  templateUrl: './nivel3-3.component.html',
  styleUrls: ['./nivel3-3.component.css', '../../app.component.css']
})
export class Nivel33Component {
  pre1 = `import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HolaMundoComponent },
  { path: 'modulo-lazy', loadChildren: () => import('./modulo-lazy/modulo-lazy.module').then(m => m.ModuloLazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`;
component = '@Component';
  pre2 = `import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EjemploComponent { }`;
  pre3 = `trackById(index: number, item: any): number {
  return item.id;
}`;
pre4 = `<ul>
  <li *ngFor="let post of posts$ | async; trackBy: trackById">
    <strong>{{ post.title }}</strong>
    <p>{{ post.body }}</p>
  </li>
</ul>`
}
