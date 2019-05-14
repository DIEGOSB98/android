import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDePaginaPage } from './acerca-de-pagina.page';

describe('AcercaDePaginaPage', () => {
  let component: AcercaDePaginaPage;
  let fixture: ComponentFixture<AcercaDePaginaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaDePaginaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDePaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
