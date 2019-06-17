import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTasksComponent } from './solution-tasks.component';

describe('SolutionTasksComponent', () => {
  let component: SolutionTasksComponent;
  let fixture: ComponentFixture<SolutionTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
