import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel3-2',
  standalone: false,
  
  templateUrl: './nivel3-2.component.html',
  styleUrls: ['./nivel3-2.component.css', '../../app.component.css']
})
export class Nivel32Component {
  pre1 = `import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HolaMundoComponent } from './hola-mundo.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('HolaMundoComponent', () => {
  let component: HolaMundoComponent;
  let fixture: ComponentFixture<HolaMundoComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['obtenerDatos']);
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['obtenerPosts', 'crearPost']);

    await TestBed.configureTestingModule({
      declarations: [ HolaMundoComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: DataService, useValue: dataServiceSpy },
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    })
    .compileComponents();

    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaMundoComponent);
    component = fixture.componentInstance;
    dataService.obtenerDatos.and.returnValue(["Dato 1", "Dato 2", "Dato 3"]);
    apiService.obtenerPosts.and.returnValue(of([{ title: 'Post 1', body: 'Contenido 1' }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default mensaje', () => {
    expect(component.mensaje).toBe("¡Bienvenido al binding de datos!");
  });

  it('should update mensaje when cambiarMensaje is called', () => {
    component.cambiarMensaje('Nuevo Mensaje');
    expect(component.mensaje).toBe('Nuevo Mensaje');
  });

  it('should load datos from DataService on init', () => {
    expect(component.datos).toEqual(["Dato 1", "Dato 2", "Dato 3"]);
    expect(dataService.obtenerDatos).toHaveBeenCalled();
  });

  it('should load posts from ApiService on init', () => {
    component.posts$.subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts[0].title).toBe('Post 1');
    });
    expect(apiService.obtenerPosts).toHaveBeenCalled();
  });
});`;
pre2 = `import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts via GET', () => {
    const dummyPosts = [
      { title: 'Post 1', body: 'Contenido 1' },
      { title: 'Post 2', body: 'Contenido 2' }
    ];

    service.obtenerPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPosts);
  });

  it('should create a post via POST', () => {
    const newPost = { title: 'Nuevo Post', body: 'Nuevo Contenido' };

    service.crearPost(newPost).subscribe(post => {
      expect(post).toEqual(newPost);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newPost);
  });

  it('should handle error on GET', () => {
    const errorMessage = 'Error de red';

    service.obtenerPosts().subscribe(
      () => fail('Debería haber fallado con un error'),
      (error) => {
        expect(error).toBe('Algo salió mal; por favor, intenta de nuevo más tarde.');
      }
    );

    const req = httpMock.expectOne(service.apiUrl);
    req.flush(errorMessage, { status: 500, statusText: 'Servidor Error' });
  });
});`;
pre3 = `it('should actualizar el nombre al escribir en el input', () => {
  const compiled = fixture.nativeElement;
  const input = compiled.querySelector('input');
  input.value = 'Nuevo Nombre';
  input.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  const p = compiled.querySelector('p');
  expect(p.textContent).toContain('Hola, Nuevo Nombre!');
});`;
pre4 = `// spec.e2e.ts
import { browser, by, element } from 'protractor';

describe('Angular App', () => {
  it('should display welcome message', () => {
    browser.get('/');
    expect(element(by.css('h1')).getText()).toEqual('Hola Mundo!');
  });

  it('should create a new post', () => {
    browser.get('/');
    element(by.css('input[name="title"]')).sendKeys('Post E2E');
    element(by.css('textarea[name="body"]')).sendKeys('Contenido del post E2E');
    element(by.buttonText('Crear Post')).click();
    expect(element(by.css('ul li strong')).getText()).toEqual('Post E2E');
  });
});`
}
