import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioAccountDetailComponent } from './podio-account-detail.component';

describe('PodioAccountDetailComponent', () => {
  let component: PodioAccountDetailComponent;
  let fixture: ComponentFixture<PodioAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioAccountDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
