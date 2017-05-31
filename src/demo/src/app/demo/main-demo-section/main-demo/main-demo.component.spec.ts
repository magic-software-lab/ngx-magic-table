import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDemoComponent } from './main-demo.component';

describe('MainDemoComponent', () => {
  let component: MainDemoComponent;
  let fixture: ComponentFixture<MainDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
