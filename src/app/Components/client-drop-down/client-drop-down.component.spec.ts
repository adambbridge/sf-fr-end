import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDropDownComponent } from './client-drop-down.component';

describe('ClientDropDownComponent', () => {
  let component: ClientDropDownComponent;
  let fixture: ComponentFixture<ClientDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
