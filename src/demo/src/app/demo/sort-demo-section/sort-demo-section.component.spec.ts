import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDemoSectionComponent } from './sort-demo-section.component';

describe('SortDemoSectionComponent', () => {
  let component: SortDemoSectionComponent;
  let fixture: ComponentFixture<SortDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
