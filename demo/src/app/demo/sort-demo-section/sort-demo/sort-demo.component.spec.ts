import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDemoComponent } from './sort-demo.component';

describe('SortDemoComponent', () => {
  let component: SortDemoComponent;
  let fixture: ComponentFixture<SortDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
