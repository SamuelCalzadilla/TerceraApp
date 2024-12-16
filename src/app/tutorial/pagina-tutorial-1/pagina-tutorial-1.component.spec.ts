import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTutorial1Component } from './pagina-tutorial-1.component';

describe('PaginaTutorial1Component', () => {
  let component: PaginaTutorial1Component;
  let fixture: ComponentFixture<PaginaTutorial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaTutorial1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTutorial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
