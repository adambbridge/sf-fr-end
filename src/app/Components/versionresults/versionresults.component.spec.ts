import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionresultsComponent } from './versionresults.component';

describe('VersionresultsComponent', () => {
  let component: VersionresultsComponent;
  let fixture: ComponentFixture<VersionresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
