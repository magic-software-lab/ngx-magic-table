import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupDemoSectionComponent } from './button-group-demo-section.component';

describe('ButtonGroupDemoSectionComponent', () => {
  let component: ButtonGroupDemoSectionComponent;
  let fixture: ComponentFixture<ButtonGroupDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGroupDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
