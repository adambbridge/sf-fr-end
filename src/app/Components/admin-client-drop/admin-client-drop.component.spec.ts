import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientDropComponent } from './admin-client-drop.component';

describe('AdminClientDropComponent', () => {
  let component: AdminClientDropComponent;
  let fixture: ComponentFixture<AdminClientDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
