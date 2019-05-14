import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleSanPage } from './ale-san.page';

describe('AleSanPage', () => {
  let component: AleSanPage;
  let fixture: ComponentFixture<AleSanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleSanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleSanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
