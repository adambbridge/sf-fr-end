import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasSpaceComponent } from './saas-space.component';

describe('SaasSpaceComponent', () => {
  let component: SaasSpaceComponent;
  let fixture: ComponentFixture<SaasSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
