import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel22Component } from './nivel2-2.component';

describe('Nivel22Component', () => {
  let component: Nivel22Component;
  let fixture: ComponentFixture<Nivel22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
