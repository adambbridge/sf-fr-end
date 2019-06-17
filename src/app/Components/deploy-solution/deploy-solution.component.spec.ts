import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploySolutionComponent } from './deploy-solution.component';

describe('DeploySolutionComponent', () => {
  let component: DeploySolutionComponent;
  let fixture: ComponentFixture<DeploySolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploySolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploySolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
