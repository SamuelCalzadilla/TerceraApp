import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel11Component } from './nivel1-1.component';

describe('Nivel11Component', () => {
  let component: Nivel11Component;
  let fixture: ComponentFixture<Nivel11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
