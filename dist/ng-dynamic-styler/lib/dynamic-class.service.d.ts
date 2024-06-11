import * as i0 from "@angular/core";
export declare class DynamicClassService {
    private elementRegistry;
    registerElement(key: string, element: HTMLElement): void;
    unregisterElement(key: string): void;
    addClass(key: string, className: string): void;
    removeClass(key: string, className: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicClassService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicClassService>;
}
