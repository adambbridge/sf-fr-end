import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChipCustomComponent } from './mat-chip-custom.component';

describe('MatChipCustomComponent', () => {
  let component: MatChipCustomComponent;
  let fixture: ComponentFixture<MatChipCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatChipCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatChipCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
