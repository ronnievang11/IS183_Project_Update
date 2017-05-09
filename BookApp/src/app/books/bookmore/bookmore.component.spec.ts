import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmoreComponent } from './bookmore.component';

describe('BookmoreComponent', () => {
  let component: BookmoreComponent;
  let fixture: ComponentFixture<BookmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
