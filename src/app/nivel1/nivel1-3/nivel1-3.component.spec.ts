import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel13Component } from './nivel1-3.component';

describe('Nivel13Component', () => {
  let component: Nivel13Component;
  let fixture: ComponentFixture<Nivel13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
