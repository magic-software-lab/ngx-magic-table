import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDemoSectionComponent } from './dropdown-demo-section.component';

describe('DropdownDemoSectionComponent', () => {
  let component: DropdownDemoSectionComponent;
  let fixture: ComponentFixture<DropdownDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
