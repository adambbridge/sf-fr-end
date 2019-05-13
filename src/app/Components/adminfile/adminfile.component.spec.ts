import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfileComponent } from './adminfile.component';

describe('AdminfileComponent', () => {
  let component: AdminfileComponent;
  let fixture: ComponentFixture<AdminfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
