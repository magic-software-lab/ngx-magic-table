import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonDemoSectionComponent } from './simple-button-demo-section.component';

describe('SimpleButtonDemoSectionComponent', () => {
  let component: SimpleButtonDemoSectionComponent;
  let fixture: ComponentFixture<SimpleButtonDemoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleButtonDemoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleButtonDemoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
