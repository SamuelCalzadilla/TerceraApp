import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel3-4',
  standalone: false,
  
  templateUrl: './nivel3-4.component.html',
  styleUrls: ['./nivel3-4.component.css', '../../app.component.css']
})
export class Nivel34Component {
  pre1 = `
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://api.ejemplo.com/auth';
  private tokenKey = 'auth_token';
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post<{token: string}>(\`\${this.authUrl}/login\`, credentials)
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
          this.loggedIn.next(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
`;
  pre2 = `import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
      return this.authService.isLoggedIn().pipe(
        take(1),
        map(isLoggedIn => {
          if (isLoggedIn) {
            return true;
          } else {
            return this.router.createUrlTree(['/login']);
          }
        })
      );
  }
}`;
  pre3 = `import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(
      () => this.router.navigate(['/']),
      error => this.errorMessage = 'Credenciales inválidas'
    );
  }
}`;
  pre4 = `<h2>Iniciar Sesión</h2>
<form (ngSubmit)="login()">
  <div>
    <label for="username">Usuario:</label>
    <input type="text" id="username" [(ngModel)]="credentials.username" name="username" required>
  </div>
  <div>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" [(ngModel)]="credentials.password" name="password" required>
  </div>
  <div *ngIf="errorMessage">
    <small>{{ errorMessage }}</small>
  </div>
  <button type="submit">Entrar</button>
</form>`;
pre5 = `
const routes: Routes = [
  { path: '', component: HolaMundoComponent },
  { path: 'modulo-lazy', loadChildren: () => import('./modulo-lazy/modulo-lazy.module').then(m => m.ModuloLazyModule), canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
`;
pre6 = `
// En AuthService
renovarToken(): Observable<any> {
  return this.http.post<{token: string}>(\`\${this.authUrl}/renovar\`, {})
    .pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
      }),
      catchError(this.manejarError)
    );
}
`;
abacritt = "@abacritt";
pre7 = `import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  imports: [
    // ... otros imports
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('TU_CLIENT_ID_GOOGLE')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  // ... otros códigos
})
export class AppModule { }`;
pre8 = `import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService, private socialAuthService: SocialAuthService) { }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
      // Enviar el token a tu backend para validar y obtener un JWT
      this.authService.loginGoogle(user.idToken).subscribe(
        () => this.router.navigate(['/']),
        error => this.errorMessage = 'Error al iniciar sesión con Google'
      );
    }).catch(error => {
      this.errorMessage = 'Error al iniciar sesión con Google';
    });
  }
}`

}
