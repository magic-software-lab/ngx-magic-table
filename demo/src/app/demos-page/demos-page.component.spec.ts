import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosPageComponent } from './demos-page.component';

describe('DemosPageComponent', () => {
  let component: DemosPageComponent;
  let fixture: ComponentFixture<DemosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
