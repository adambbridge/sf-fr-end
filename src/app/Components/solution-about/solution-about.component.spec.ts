import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionAboutComponent } from './solution-about.component';

describe('SolutionAboutComponent', () => {
  let component: SolutionAboutComponent;
  let fixture: ComponentFixture<SolutionAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
