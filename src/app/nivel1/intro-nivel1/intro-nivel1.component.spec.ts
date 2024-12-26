import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNivel1Component } from './intro-nivel1.component';

describe('IntroNivel1Component', () => {
  let component: IntroNivel1Component;
  let fixture: ComponentFixture<IntroNivel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroNivel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroNivel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
