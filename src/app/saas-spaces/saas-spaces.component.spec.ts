import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasSpacesComponent } from './saas-spaces.component';

describe('SaasSpacesComponent', () => {
  let component: SaasSpacesComponent;
  let fixture: ComponentFixture<SaasSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaasSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaasSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
