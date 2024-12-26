import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel35Component } from './nivel3-5.component';

describe('Nivel35Component', () => {
  let component: Nivel35Component;
  let fixture: ComponentFixture<Nivel35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel35Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
