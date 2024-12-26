import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel14Component } from './nivel1-4.component';

describe('Nivel14Component', () => {
  let component: Nivel14Component;
  let fixture: ComponentFixture<Nivel14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
