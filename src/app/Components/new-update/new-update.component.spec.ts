import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpdateComponent } from './new-update.component';

describe('NewUpdateComponent', () => {
  let component: NewUpdateComponent;
  let fixture: ComponentFixture<NewUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
