import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioSpacesComponent } from './podio-spaces.component';

describe('PodioSpacesComponent', () => {
  let component: PodioSpacesComponent;
  let fixture: ComponentFixture<PodioSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
