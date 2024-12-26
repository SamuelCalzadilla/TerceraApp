import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel34Component } from './nivel3-4.component';

describe('Nivel34Component', () => {
  let component: Nivel34Component;
  let fixture: ComponentFixture<Nivel34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel34Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
