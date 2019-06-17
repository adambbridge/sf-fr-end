import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatchComponent } from './new-patch.component';

describe('NewPatchComponent', () => {
  let component: NewPatchComponent;
  let fixture: ComponentFixture<NewPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
