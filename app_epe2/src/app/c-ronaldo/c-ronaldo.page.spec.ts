import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRonaldoPage } from './c-ronaldo.page';

describe('CRonaldoPage', () => {
  let component: CRonaldoPage;
  let fixture: ComponentFixture<CRonaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRonaldoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRonaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
