import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel27Component } from './nivel2-7.component';

describe('Nivel27Component', () => {
  let component: Nivel27Component;
  let fixture: ComponentFixture<Nivel27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
