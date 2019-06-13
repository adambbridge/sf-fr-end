import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solutions2Component } from './solutions2.component';

describe('Solutions2Component', () => {
  let component: Solutions2Component;
  let fixture: ComponentFixture<Solutions2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solutions2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solutions2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
