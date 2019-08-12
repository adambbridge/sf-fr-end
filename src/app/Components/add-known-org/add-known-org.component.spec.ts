import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKnownOrgComponent } from './add-known-org.component';

describe('AddKnownOrgComponent', () => {
  let component: AddKnownOrgComponent;
  let fixture: ComponentFixture<AddKnownOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKnownOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKnownOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
