import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel3-1',
  standalone: false,
  
  templateUrl: './nivel3-1.component.html',
  styleUrls: ['./nivel3-1.component.css', '../../app.component.css']
})
export class Nivel31Component {
  ngrx = '@ngrx';
  pre1 = `export interface PostState {
  posts: any[];
  loading: boolean;
  error: string | null;
}

export const initialPostState: PostState = {
  posts: [],
  loading: false,
  error: null
};`;
pre2 = `import { createAction, props } from '@ngrx/store';

export const cargarPosts = createAction('[Post] Cargar Posts');
export const cargarPostsSuccess = createAction('[Post] Cargar Posts Success', props<{ posts: any[] }>());
export const cargarPostsFailure = createAction('[Post] Cargar Posts Failure', props<{ error: string }>());
`;
pre3 = `import { createReducer, on } from '@ngrx/store';
import { cargarPosts, cargarPostsSuccess, cargarPostsFailure } from './post.actions';
import { PostState, initialPostState } from './post.state';

export const postReducer = createReducer(
  initialPostState,
  on(cargarPosts, state => ({ ...state, loading: true })),
  on(cargarPostsSuccess, (state, { posts }) => ({ ...state, posts, loading: false })),
  on(cargarPostsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);`;
pre4 = `import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/post.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({ postState: postReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  // ... otros códigos
})
export class AppModule { }`;
pre5 = `import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostState } from './post.state';

export const selectPostState = createFeatureSelector<PostState>('postState');

export const selectAllPosts = createSelector(
  selectPostState,
  (state: PostState) => state.posts
);

export const selectLoading = createSelector(
  selectPostState,
  (state: PostState) => state.loading
);

export const selectError = createSelector(
  selectPostState,
  (state: PostState) => state.error
);`;
pre6 = `import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../api.service';
import { cargarPosts, cargarPostsSuccess, cargarPostsFailure } from './post.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {

  cargarPosts$ = createEffect(() => this.actions$.pipe(
    ofType(cargarPosts),
    mergeMap(() => this.apiService.obtenerPosts()
      .pipe(
        map(posts => cargarPostsSuccess({ posts })),
        catchError(error => of(cargarPostsFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}`;
pre7 = `import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './state/post.effects';

@NgModule({
  imports: [
    // ... otros imports
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  // ... otros códigos
})
export class AppModule { }`;
pre8 = `import { Store } from '@ngrx/store';
import { PostState } from './state/post.state';
import { cargarPosts } from './state/post.actions';
import { selectAllPosts, selectLoading, selectError } from './state/post.selectors';

export class HolaMundoComponent implements OnInit {
  datos: string[] = [];
  posts$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  nuevoPost: any = { title: '', body: '' };
  formularioActualizar: FormGroup;

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private store: Store<{ postState: PostState }>
  ) { 
    this.formularioActualizar = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      body: new FormControl('', Validators.required)
    });

    this.posts$ = this.store.select(selectAllPosts);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.datos = this.dataService.obtenerDatos();
    this.store.dispatch(cargarPosts());
  }

  // ... otros métodos
}`;
pre9 = `<h2>{{ mensaje }}</h2>
<button (click)="cambiarMensaje('Has actualizado el mensaje!')">Cambiar Mensaje</button>

<input [(ngModel)]="nombre" placeholder="Escribe tu nombre"/>
<p>Hola, {{ nombre }}!</p>

<h3>Datos del Servicio:</h3>
<ul>
  <li *ngFor="let dato of datos">{{ dato }}</li>
</ul>

<h3>Posts de la API con NgRx:</h3>
<div *ngIf="loading$ | async">
  <p>Cargando posts...</p>
</div>
<div *ngIf="error$ | async as error">
  <p>Error: {{ error }}</p>
</div>
<ul>
  <li *ngFor="let post of posts$ | async">
    <strong>{{ post.title }}</strong>
    <p>{{ post.body }}</p>
    <button (click)="actualizarPost(post)">Actualizar Post</button>
  </li>
</ul>

<h3>Crear Nuevo Post (Template-Driven)</h3>
<form #postForm="ngForm" (ngSubmit)="crearNuevoPost()">
  <div>
    <label for="title">Título:</label>
    <input type="text" id="title" name="title" [(ngModel)]="nuevoPost.title" required minlength="5" />
    <div *ngIf="postForm.controls.title?.invalid && (postForm.controls.title?.dirty || postForm.controls.title?.touched)">
      <small>El título es obligatorio y debe tener al menos 5 caracteres.</small>
    </div>
  </div>
  <div>
    <label for="body">Contenido:</label>
    <textarea id="body" name="body" [(ngModel)]="nuevoPost.body" required></textarea>
    <div *ngIf="postForm.controls.body?.invalid && (postForm.controls.body?.dirty || postForm.controls.body?.touched)">
      <small>El contenido es obligatorio.</small>
    </div>
  </div>
  <button type="submit" [disabled]="!postForm.form.valid">Crear Post</button>
</form>`
}
