import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel12Component } from './nivel1-2.component';

describe('Nivel12Component', () => {
  let component: Nivel12Component;
  let fixture: ComponentFixture<Nivel12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
