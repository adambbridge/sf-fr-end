import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionnamemoxComponent } from './solutionnamemox.component';

describe('SolutionnamemoxComponent', () => {
  let component: SolutionnamemoxComponent;
  let fixture: ComponentFixture<SolutionnamemoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionnamemoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionnamemoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
