import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientConfirmationComponent } from './new-client-confirmation.component';

describe('NewClientConfirmationComponent', () => {
  let component: NewClientConfirmationComponent;
  let fixture: ComponentFixture<NewClientConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClientConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
