import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDemoSectionComponent } from './pagination-demo-section.component';

describe('PaginationDemoSectionComponent', () => {
  let component: PaginationDemoSectionComponent;
  let fixture: ComponentFixture<PaginationDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
