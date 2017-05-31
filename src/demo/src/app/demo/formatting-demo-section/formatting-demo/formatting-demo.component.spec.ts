import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingDemoComponent } from './formatting-demo.component';

describe('FormattingDemoComponent', () => {
  let component: FormattingDemoComponent;
  let fixture: ComponentFixture<FormattingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
