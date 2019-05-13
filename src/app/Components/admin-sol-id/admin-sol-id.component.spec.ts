import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolIdComponent } from './admin-sol-id.component';

describe('AdminSolIdComponent', () => {
  let component: AdminSolIdComponent;
  let fixture: ComponentFixture<AdminSolIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSolIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSolIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
