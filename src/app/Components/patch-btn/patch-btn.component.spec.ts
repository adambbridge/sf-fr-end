import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchBtnComponent } from './patch-btn.component';

describe('PatchBtnComponent', () => {
  let component: PatchBtnComponent;
  let fixture: ComponentFixture<PatchBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
