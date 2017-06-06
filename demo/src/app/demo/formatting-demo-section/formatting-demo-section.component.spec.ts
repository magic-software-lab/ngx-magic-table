import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingDemoSectionComponent } from './formatting-demo-section.component';

describe('FormattingDemoSectionComponent', () => {
  let component: FormattingDemoSectionComponent;
  let fixture: ComponentFixture<FormattingDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattingDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattingDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
