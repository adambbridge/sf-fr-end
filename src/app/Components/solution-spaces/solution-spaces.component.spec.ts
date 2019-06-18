import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionSpacesComponent } from './solution-spaces.component';

describe('SolutionSpacesComponent', () => {
  let component: SolutionSpacesComponent;
  let fixture: ComponentFixture<SolutionSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
