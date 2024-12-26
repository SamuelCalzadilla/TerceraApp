import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNivel2Component } from './intro-nivel2.component';

describe('IntroNivel2Component', () => {
  let component: IntroNivel2Component;
  let fixture: ComponentFixture<IntroNivel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroNivel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroNivel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
