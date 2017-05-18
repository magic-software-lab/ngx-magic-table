import { Directive, OnChanges, Input, Output, EventEmitter,
         HostListener, ElementRef, Renderer, SimpleChange } from '@angular/core';

import { MagicTableColumn } from '../../models/magic-table-options';

@Directive({
  selector: '[sortedColumn]'
})
export class NgxMagicTableSortedColumnDirective implements OnChanges {
  @Input()
  public sortedColumn: MagicTableColumn;

  @Output() public sortChanged: EventEmitter<any> = new EventEmitter();

  private get column() {
    return this.sortedColumn;
  }

  constructor(private el: ElementRef,
    private renderer: Renderer) { }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    this.build();
  }

  @HostListener('click', ['$event'])
  public onToggleSort(event: any): void {
    if (event) {
      event.preventDefault();
    }

    if (this.canBuild()) {
      switch (this.column.sort) {
        case 'none':
          this.column.sort = 'asc';
          break;
        case 'asc':
          this.column.sort = 'desc';
          break;
        default:
          this.column.sort = 'none';
          break;
      }

      this.sortChanged.emit();
    }
  }

  private canBuild() {
    return this.column && this.column.sort;
  }

  private build() {
    if (this.canBuild()) {
      this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
    }
  }

}
