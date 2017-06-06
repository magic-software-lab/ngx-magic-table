import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSectionSourceComponent } from './demo-section-source.component';

describe('DemoSectionSourceComponent', () => {
  let component: DemoSectionSourceComponent;
  let fixture: ComponentFixture<DemoSectionSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSectionSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSectionSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
