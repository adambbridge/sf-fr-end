import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatingComponent } from './authenticating.component';

describe('AuthenticatingComponent', () => {
  let component: AuthenticatingComponent;
  let fixture: ComponentFixture<AuthenticatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have', () => {
    expect(component.IsLoggedIn).toBeTruthy();
    expect(component.oauthResponse$).toBeTruthy();
    expect(component.stringConverter).toBeTruthy();
  });
});
