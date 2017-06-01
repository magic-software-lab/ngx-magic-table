import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';

import { NgxMagicTableComponent } from './magic-table.component';
import { NgxMagicTableContentPlaceholderComponent } from '../content-placeholder/content-placeholder.component';

import { NgxMagicTableSortedColumnDirective} from '../../directive/column/sorted-column.directive';
import { NgxMagicTableBindDataDirective} from '../../directive/bind-data/bind-data.directive';

import { NgxMagicTableObjectUtilsService } from '../../service/object-utils';

class MockNgxMagicTableObjectUtilsService {
  public isEquals(obj1: any, obj2: any): Boolean {
    return true;
  }
}

describe('NgxMagicTableComponent', () => {
  let component: NgxMagicTableComponent;
  let fixture: ComponentFixture<NgxMagicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BsDropdownModule.forRoot(),
        PaginationModule.forRoot()
      ],
      declarations: [
        NgxMagicTableComponent,
        NgxMagicTableContentPlaceholderComponent,
        NgxMagicTableSortedColumnDirective,
        NgxMagicTableBindDataDirective
      ],
      providers: [
        { provide: NgxMagicTableObjectUtilsService, useClass: MockNgxMagicTableObjectUtilsService }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(NgxMagicTableComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
