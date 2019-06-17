import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioAssetsComponent } from './podio-assets.component';

describe('PodioAssetsComponent', () => {
  let component: PodioAssetsComponent;
  let fixture: ComponentFixture<PodioAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
