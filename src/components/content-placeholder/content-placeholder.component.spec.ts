import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMagicTableContentPlaceholderComponent } from './content-placeholder.component';

describe('NgMagicTableContentPlaceholderComponent', () => {
  let component: NgxMagicTableContentPlaceholderComponent;
  let fixture: ComponentFixture<NgxMagicTableContentPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicTableContentPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMagicTableContentPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
