import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyOrderComponent } from './recently-order.component';

describe('RecentlyOrderComponent', () => {
  let component: RecentlyOrderComponent;
  let fixture: ComponentFixture<RecentlyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
