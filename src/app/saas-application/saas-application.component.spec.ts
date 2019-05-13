import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasApplicationComponent } from './saas-application.component';

describe('SaasApplicationComponent', () => {
  let component: SaasApplicationComponent;
  let fixture: ComponentFixture<SaasApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
