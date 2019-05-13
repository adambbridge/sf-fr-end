import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioOrgsComponent } from './podio-orgs.component';

describe('PodioOrgsComponent', () => {
  let component: PodioOrgsComponent;
  let fixture: ComponentFixture<PodioOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
