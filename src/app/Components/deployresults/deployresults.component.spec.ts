import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployresultsComponent } from './deployresults.component';

describe('DeployresultsComponent', () => {
  let component: DeployresultsComponent;
  let fixture: ComponentFixture<DeployresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
