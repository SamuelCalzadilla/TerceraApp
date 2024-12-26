import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel21Component } from './nivel2-1.component';

describe('Nivel21Component', () => {
  let component: Nivel21Component;
  let fixture: ComponentFixture<Nivel21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
