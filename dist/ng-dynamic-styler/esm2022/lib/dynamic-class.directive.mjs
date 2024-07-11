import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-class.service";
export class DynamicClassDirective {
    el;
    classManager;
    ngDynamicClassKey = '';
    constructor(el, classManager) {
        this.el = el;
        this.classManager = classManager;
    }
    ngOnInit() {
        this.classManager.registerElement(this.ngDynamicClassKey, this.el.nativeElement);
    }
    ngOnDestroy() {
        this.classManager.unregisterElement(this.ngDynamicClassKey);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DynamicClassDirective, deps: [{ token: i0.ElementRef }, { token: i1.DynamicClassService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.0", type: DynamicClassDirective, selector: "[ngDynamicClass]", inputs: { ngDynamicClassKey: "ngDynamicClassKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DynamicClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngDynamicClass]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.DynamicClassService }], propDecorators: { ngDynamicClassKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jbGFzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1keW5hbWljLXN0eWxlci9zcmMvbGliL2R5bmFtaWMtY2xhc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7O0FBTTlFLE1BQU0sT0FBTyxxQkFBcUI7SUFHWjtJQUF3QjtJQUZuQyxpQkFBaUIsR0FBVyxFQUFFLENBQUM7SUFFeEMsWUFBb0IsRUFBYyxFQUFVLFlBQWlDO1FBQXpELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFBSSxDQUFDO0lBRWxGLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUQsQ0FBQzt1R0FYVSxxQkFBcUI7MkZBQXJCLHFCQUFxQjs7MkZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3QjtpSEFFVSxpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHluYW1pY0NsYXNzU2VydmljZX0gZnJvbSAnLi9keW5hbWljLWNsYXNzLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdEeW5hbWljQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ2xhc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG5nRHluYW1pY0NsYXNzS2V5OiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNsYXNzTWFuYWdlcjogRHluYW1pY0NsYXNzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hbmFnZXIucmVnaXN0ZXJFbGVtZW50KHRoaXMubmdEeW5hbWljQ2xhc3NLZXksIHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFuYWdlci51bnJlZ2lzdGVyRWxlbWVudCh0aGlzLm5nRHluYW1pY0NsYXNzS2V5KTtcbiAgfVxufVxuIl19