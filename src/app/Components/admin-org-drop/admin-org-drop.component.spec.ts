import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrgDropComponent } from './admin-org-drop.component';

describe('AdminOrgDropComponent', () => {
  let component: AdminOrgDropComponent;
  let fixture: ComponentFixture<AdminOrgDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrgDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrgDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
