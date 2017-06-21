import { Component, DebugElement, Pipe } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { NgxMagicTableSortedColumnDirective } from './sorted-column.directive';

@Component({
  template: `
  <p [sortedColumn]="value"> </p>`
})
class TestComponent {
  public value: any;
}

describe('NgxMagicTableSortedColumnDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementWithDirective: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicTableSortedColumnDirective, TestComponent ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    elementWithDirective = fixture.debugElement.query(By.directive(NgxMagicTableSortedColumnDirective));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(elementWithDirective).toBeDefined();
  });
});
