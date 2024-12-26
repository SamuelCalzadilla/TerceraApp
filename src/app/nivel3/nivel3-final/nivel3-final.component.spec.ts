import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel3FinalComponent } from './nivel3-final.component';

describe('Nivel3FinalComponent', () => {
  let component: Nivel3FinalComponent;
  let fixture: ComponentFixture<Nivel3FinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nivel3FinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nivel3FinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
