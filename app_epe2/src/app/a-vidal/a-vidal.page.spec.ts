import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVidalPage } from './a-vidal.page';

describe('AVidalPage', () => {
  let component: AVidalPage;
  let fixture: ComponentFixture<AVidalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVidalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVidalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
