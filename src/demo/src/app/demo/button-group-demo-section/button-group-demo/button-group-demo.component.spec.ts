import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupDemoComponent } from './button-group-demo.component';

describe('ButtonGroupDemoComponent', () => {
  let component: ButtonGroupDemoComponent;
  let fixture: ComponentFixture<ButtonGroupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGroupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
