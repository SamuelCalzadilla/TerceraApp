import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEjemplos2Component } from './pagina-ejemplos-2.component';

describe('PaginaEjemplos2Component', () => {
  let component: PaginaEjemplos2Component;
  let fixture: ComponentFixture<PaginaEjemplos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaEjemplos2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEjemplos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
