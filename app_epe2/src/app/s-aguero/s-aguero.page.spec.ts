import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAgueroPage } from './s-aguero.page';

describe('SAgueroPage', () => {
  let component: SAgueroPage;
  let fixture: ComponentFixture<SAgueroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAgueroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAgueroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
