import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingSlideshowComponent } from './onboarding-slideshow.component';

describe('OnboardingSlideshowComponent', () => {
  let component: OnboardingSlideshowComponent;
  let fixture: ComponentFixture<OnboardingSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
