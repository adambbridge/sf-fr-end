import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioCredentialComponent } from './podio-credential.component';

describe('PodioCredentialComponent', () => {
  let component: PodioCredentialComponent;
  let fixture: ComponentFixture<PodioCredentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioCredentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
