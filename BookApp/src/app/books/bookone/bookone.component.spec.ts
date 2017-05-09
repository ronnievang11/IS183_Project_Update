import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookoneComponent } from './bookone.component';

describe('BookoneComponent', () => {
  let component: BookoneComponent;
  let fixture: ComponentFixture<BookoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
