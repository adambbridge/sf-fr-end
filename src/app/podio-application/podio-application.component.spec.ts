import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioApplicationComponent } from './podio-application.component';

describe('PodioApplicationComponent', () => {
  let component: PodioApplicationComponent;
  let fixture: ComponentFixture<PodioApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
