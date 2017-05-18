var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
let NgxMagicTableSortedColumnDirective = class NgxMagicTableSortedColumnDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortChanged = new EventEmitter();
    }
    get column() {
        return this.terpNgMagicTableSortedColumn;
    }
    ngOnChanges(changes) {
        this.build();
    }
    onToggleSort(event) {
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
    canBuild() {
        return this.column && this.column.sort;
    }
    build() {
        if (this.canBuild()) {
            this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
        }
    }
};
__decorate([
    Input()
], NgxMagicTableSortedColumnDirective.prototype, "terpNgMagicTableSortedColumn", void 0);
__decorate([
    Output()
], NgxMagicTableSortedColumnDirective.prototype, "sortChanged", void 0);
__decorate([
    HostListener('click', ['$event'])
], NgxMagicTableSortedColumnDirective.prototype, "onToggleSort", null);
NgxMagicTableSortedColumnDirective = __decorate([
    Directive({
        selector: '[sortedColumn]'
    })
], NgxMagicTableSortedColumnDirective);
export { NgxMagicTableSortedColumnDirective };
