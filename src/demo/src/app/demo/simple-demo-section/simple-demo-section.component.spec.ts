import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDemoSectionComponent } from './simple-demo-section.component';

describe('SimpleDemoSectionComponent', () => {
  let component: SimpleDemoSectionComponent;
  let fixture: ComponentFixture<SimpleDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
