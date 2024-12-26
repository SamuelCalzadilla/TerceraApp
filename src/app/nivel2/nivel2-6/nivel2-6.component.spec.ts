import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel26Component } from './nivel2-6.component';

describe('Nivel26Component', () => {
  let component: Nivel26Component;
  let fixture: ComponentFixture<Nivel26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
