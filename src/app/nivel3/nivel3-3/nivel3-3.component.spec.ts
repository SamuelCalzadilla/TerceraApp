import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel33Component } from './nivel3-3.component';

describe('Nivel33Component', () => {
  let component: Nivel33Component;
  let fixture: ComponentFixture<Nivel33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
