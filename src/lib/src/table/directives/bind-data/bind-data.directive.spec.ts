import { Component, DebugElement, Pipe } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { NgxMagicTableBindDataDirective } from './bind-data.directive';

import { MagicTableColumn } from '../../model/magic-table-options';

class MockDatePipe implements Pipe {
    name = 'date';

    transform(query: string, ...args: any[]): any {
        return query;
    }
}

class MockCurrencyPipe implements Pipe {
    name = 'currency';

    transform(query: string, ...args: any[]): any {
        return query;
    }
}

class MockDecimalPipe implements Pipe {
    name = 'decimal';

    transform(query: string, ...args: any[]): any {
        return query;
    }
}

@Component({
  template: `
  <p [bindData]="value"> </p>`
})
class TestComponent {
  public value: any;
}

describe('NgxMagicTableBindDataDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementWithDirective: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicTableBindDataDirective, TestComponent ],
      providers: [
        { provide: DatePipe, useClass: MockDatePipe },
        { provide: CurrencyPipe, useClass: MockCurrencyPipe },
        { provide: DecimalPipe, useClass: MockDecimalPipe }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    elementWithDirective = fixture.debugElement.query(By.directive(NgxMagicTableBindDataDirective));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(elementWithDirective).toBeDefined();
  });

  it('should bind element value string ', () => {
    const row: any = { name: 'John Stark'};
    const column: MagicTableColumn = {
        field: 'name',
        title: 'Name'
    };
    component.value = { row: row, column: column};
    fixture.detectChanges();

    expect(elementWithDirective.nativeElement.firstChild.data).toBe(row.name);
  });
});
