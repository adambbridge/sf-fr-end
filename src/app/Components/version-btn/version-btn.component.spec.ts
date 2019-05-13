import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionBtnComponent } from './version-btn.component';

describe('VersionBtnComponent', () => {
  let component: VersionBtnComponent;
  let fixture: ComponentFixture<VersionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
