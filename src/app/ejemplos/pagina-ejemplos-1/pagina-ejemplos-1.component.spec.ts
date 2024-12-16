import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEjemplos1Component } from './pagina-ejemplos-1.component';

describe('PaginaEjemplos1Component', () => {
  let component: PaginaEjemplos1Component;
  let fixture: ComponentFixture<PaginaEjemplos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaEjemplos1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEjemplos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
