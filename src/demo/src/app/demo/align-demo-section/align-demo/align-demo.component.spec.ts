import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignDemoComponent } from './align-demo.component';

describe('AlignDemoComponent', () => {
  let component: AlignDemoComponent;
  let fixture: ComponentFixture<AlignDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
