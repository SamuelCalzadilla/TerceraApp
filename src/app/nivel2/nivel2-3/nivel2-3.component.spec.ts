import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel23Component } from './nivel2-3.component';

describe('Nivel23Component', () => {
  let component: Nivel23Component;
  let fixture: ComponentFixture<Nivel23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
