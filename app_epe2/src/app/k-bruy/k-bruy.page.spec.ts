import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KBruyPage } from './k-bruy.page';

describe('KBruyPage', () => {
  let component: KBruyPage;
  let fixture: ComponentFixture<KBruyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KBruyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KBruyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
