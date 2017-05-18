var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let NgxMagicTableObjectUtilsService = class NgxMagicTableObjectUtilsService {
    isEquals(obj1, obj2) {
        for (const p in obj1) {
            if (obj1.hasOwnProperty(p) === obj2.hasOwnProperty(p)) {
                switch (typeof (obj1[p])) {
                    // Deep compare objects
                    case 'object':
                        if (!this.isEquals(obj1[p], obj2[p])) {
                            return false;
                        }
                        break;
                    // Compare function code
                    case 'function':
                        if (typeof (obj2[p]) === 'undefined' || (p !== 'compare' && obj1[p].toString() !== obj2[p].toString())) {
                            return false;
                        }
                        break;
                    // Compare values
                    default:
                        if (obj1[p] !== obj2[p]) {
                            return false;
                        }
                }
            }
        }
        // Check object 2 for any extra properties
        for (const p in obj2) {
            if (typeof (obj1[p]) === 'undefined') {
                return false;
            }
        }
        return true;
    }
};
NgxMagicTableObjectUtilsService = __decorate([
    Injectable()
], NgxMagicTableObjectUtilsService);
export { NgxMagicTableObjectUtilsService };
