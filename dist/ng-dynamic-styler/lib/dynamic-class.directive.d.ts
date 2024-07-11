import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { DynamicClassService } from './dynamic-class.service';
import * as i0 from "@angular/core";
export declare class DynamicClassDirective implements OnInit, OnDestroy {
    private el;
    private classManager;
    ngDynamicClassKey: string;
    constructor(el: ElementRef, classManager: DynamicClassService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicClassDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DynamicClassDirective, "[ngDynamicClass]", never, { "ngDynamicClassKey": { "alias": "ngDynamicClassKey"; "required": false; }; }, {}, never, never, false, never>;
}
