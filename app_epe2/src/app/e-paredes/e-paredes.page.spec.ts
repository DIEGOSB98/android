import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EParedesPage } from './e-paredes.page';

describe('EParedesPage', () => {
  let component: EParedesPage;
  let fixture: ComponentFixture<EParedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EParedesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EParedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
