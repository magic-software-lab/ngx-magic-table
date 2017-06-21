import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDemoComponent } from './pagination-demo.component';

describe('PaginationDemoComponent', () => {
  let component: PaginationDemoComponent;
  let fixture: ComponentFixture<PaginationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
