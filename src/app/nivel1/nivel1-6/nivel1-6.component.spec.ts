import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel16Component } from './nivel1-6.component';

describe('Nivel16Component', () => {
  let component: Nivel16Component;
  let fixture: ComponentFixture<Nivel16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
