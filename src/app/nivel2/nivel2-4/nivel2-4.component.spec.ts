import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel24Component } from './nivel2-4.component';

describe('Nivel24Component', () => {
  let component: Nivel24Component;
  let fixture: ComponentFixture<Nivel24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
