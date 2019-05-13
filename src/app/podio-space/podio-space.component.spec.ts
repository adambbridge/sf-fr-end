import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioSpaceComponent } from './podio-space.component';

describe('PodioSpaceComponent', () => {
  let component: PodioSpaceComponent;
  let fixture: ComponentFixture<PodioSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
