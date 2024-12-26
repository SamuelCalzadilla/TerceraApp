import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel36Component } from './nivel3-6.component';

describe('Nivel36Component', () => {
  let component: Nivel36Component;
  let fixture: ComponentFixture<Nivel36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel36Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
