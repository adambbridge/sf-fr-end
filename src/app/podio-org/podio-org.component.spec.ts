import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioOrgComponent } from './podio-org.component';

describe('PodioOrgComponent', () => {
  let component: PodioOrgComponent;
  let fixture: ComponentFixture<PodioOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
