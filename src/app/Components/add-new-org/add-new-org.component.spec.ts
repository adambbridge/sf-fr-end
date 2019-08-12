import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOrgComponent } from './add-new-org.component';

describe('AddNewOrgComponent', () => {
  let component: AddNewOrgComponent;
  let fixture: ComponentFixture<AddNewOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
