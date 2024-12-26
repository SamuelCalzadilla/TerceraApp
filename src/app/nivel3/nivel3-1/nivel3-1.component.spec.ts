import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel31Component } from './nivel3-1.component';

describe('Nivel31Component', () => {
  let component: Nivel31Component;
  let fixture: ComponentFixture<Nivel31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
