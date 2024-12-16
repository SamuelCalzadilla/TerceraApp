import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTutorial2Component } from './pagina-tutorial-2.component';

describe('PaginaTutorial2Component', () => {
  let component: PaginaTutorial2Component;
  let fixture: ComponentFixture<PaginaTutorial2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaTutorial2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTutorial2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
