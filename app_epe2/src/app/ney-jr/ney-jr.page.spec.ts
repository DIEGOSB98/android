import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeyJrPage } from './ney-jr.page';

describe('NeyJrPage', () => {
  let component: NeyJrPage;
  let fixture: ComponentFixture<NeyJrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeyJrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeyJrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
