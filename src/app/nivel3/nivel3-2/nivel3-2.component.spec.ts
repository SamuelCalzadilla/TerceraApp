import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel32Component } from './nivel3-2.component';

describe('Nivel32Component', () => {
  let component: Nivel32Component;
  let fixture: ComponentFixture<Nivel32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
