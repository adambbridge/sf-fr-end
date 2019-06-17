import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasFieldComponent } from './saas-field.component';

describe('SaasFieldComponent', () => {
  let component: SaasFieldComponent;
  let fixture: ComponentFixture<SaasFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
