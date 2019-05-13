import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAuthenticatingComponent } from './service-authenticating.component';

describe('ServiceAuthenticatingComponent', () => {
  let component: ServiceAuthenticatingComponent;
  let fixture: ComponentFixture<ServiceAuthenticatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAuthenticatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAuthenticatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
