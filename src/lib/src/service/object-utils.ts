import { Injectable } from '@angular/core';

@Injectable()
export class NgxMagicTableObjectUtilsService {

    public isEquals(obj1: any, obj2: any): Boolean {
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
}
