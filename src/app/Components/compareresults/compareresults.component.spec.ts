import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareresultsComponent } from './compareresults.component';

describe('CompareresultsComponent', () => {
  let component: CompareresultsComponent;
  let fixture: ComponentFixture<CompareresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
