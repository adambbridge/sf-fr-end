import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioOrgDetailComponent } from './podio-org-detail.component';

describe('PodioOrgDetailComponent', () => {
  let component: PodioOrgDetailComponent;
  let fixture: ComponentFixture<PodioOrgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioOrgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioOrgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
