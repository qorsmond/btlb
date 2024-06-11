import * as i0 from '@angular/core';
import { Injectable, Directive, Input, NgModule } from '@angular/core';

class DynamicClassService {
    constructor() {
        this.elementRegistry = new Map();
    }
    registerElement(key, element) {
        this.elementRegistry.set(key, element);
    }
    unregisterElement(key) {
        this.elementRegistry.delete(key);
    }
    addClass(key, className) {
        const element = this.elementRegistry.get(key);
        if (element) {
            element.classList.add(className);
        }
    }
    removeClass(key, className) {
        const element = this.elementRegistry.get(key);
        if (element) {
            element.classList.remove(className);
        }
    }
}
DynamicClassService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DynamicClassService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DynamicClassService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DynamicClassService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DynamicClassService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class DynamicClassDirective {
    constructor(el, classManager) {
        this.el = el;
        this.classManager = classManager;
        this.ngDynamicClassKey = '';
    }
    ngOnInit() {
        this.classManager.registerElement(this.ngDynamicClassKey, this.el.nativeElement);
    }
    ngOnDestroy() {
        this.classManager.unregisterElement(this.ngDynamicClassKey);
    }
}
DynamicClassDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DynamicClassDirective, deps: [{ token: i0.ElementRef }, { token: DynamicClassService }], target: i0.ɵɵFactoryTarget.Directive });
DynamicClassDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: DynamicClassDirective, selector: "[ngDynamicClass]", inputs: { ngDynamicClassKey: "ngDynamicClassKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DynamicClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngDynamicClass]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: DynamicClassService }]; }, propDecorators: { ngDynamicClassKey: [{
                type: Input
            }] } });

class NgDynamicStylerModule {
}
NgDynamicStylerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgDynamicStylerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgDynamicStylerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NgDynamicStylerModule, declarations: [DynamicClassDirective], exports: [DynamicClassDirective] });
NgDynamicStylerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgDynamicStylerModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NgDynamicStylerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DynamicClassDirective
                    ],
                    imports: [],
                    exports: [
                        DynamicClassDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of ng-dynamic-styler
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DynamicClassDirective, DynamicClassService, NgDynamicStylerModule };
//# sourceMappingURL=ng-dynamic-styler.mjs.map
