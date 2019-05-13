import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvDropDownComponent } from './env-drop-down.component';

describe('EnvDropDownComponent', () => {
  let component: EnvDropDownComponent;
  let fixture: ComponentFixture<EnvDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
