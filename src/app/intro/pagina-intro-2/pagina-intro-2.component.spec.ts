import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIntro2Component } from './pagina-intro-2.component';

describe('PaginaIntro2Component', () => {
  let component: PaginaIntro2Component;
  let fixture: ComponentFixture<PaginaIntro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaIntro2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaIntro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
