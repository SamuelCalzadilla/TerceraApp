import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel25Component } from './nivel2-5.component';

describe('Nivel25Component', () => {
  let component: Nivel25Component;
  let fixture: ComponentFixture<Nivel25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
