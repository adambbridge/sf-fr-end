import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnvDropComponent } from './admin-env-drop.component';

describe('AdminEnvDropComponent', () => {
  let component: AdminEnvDropComponent;
  let fixture: ComponentFixture<AdminEnvDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEnvDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnvDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
