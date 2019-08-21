import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodioAccountsComponent } from './podio-accounts.component';

describe('PodioAccountsComponent', () => {
  let component: PodioAccountsComponent;
  let fixture: ComponentFixture<PodioAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodioAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodioAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
