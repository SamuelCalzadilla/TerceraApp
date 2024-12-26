import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel15Component } from './nivel1-5.component';

describe('Nivel15Component', () => {
  let component: Nivel15Component;
  let fixture: ComponentFixture<Nivel15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
