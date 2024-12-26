import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNivel3Component } from './intro-nivel3.component';

describe('IntroNivel3Component', () => {
  let component: IntroNivel3Component;
  let fixture: ComponentFixture<IntroNivel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroNivel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroNivel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
