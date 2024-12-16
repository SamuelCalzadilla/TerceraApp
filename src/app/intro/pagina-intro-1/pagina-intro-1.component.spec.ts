import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIntro1Component } from './pagina-intro-1.component';

describe('PaginaIntro1Component', () => {
  let component: PaginaIntro1Component;
  let fixture: ComponentFixture<PaginaIntro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaIntro1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaIntro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
