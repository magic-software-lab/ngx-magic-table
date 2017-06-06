import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignDemoSectionComponent } from './align-demo-section.component';

describe('AlignDemoSectionComponent', () => {
  let component: AlignDemoSectionComponent;
  let fixture: ComponentFixture<AlignDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
