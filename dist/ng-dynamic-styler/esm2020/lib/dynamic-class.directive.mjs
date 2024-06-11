import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dynamic-class.service";
export class DynamicClassDirective {
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
DynamicClassDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DynamicClassDirective, deps: [{ token: i0.ElementRef }, { token: i1.DynamicClassService }], target: i0.ɵɵFactoryTarget.Directive });
DynamicClassDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: DynamicClassDirective, selector: "[ngDynamicClass]", inputs: { ngDynamicClassKey: "ngDynamicClassKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DynamicClassDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngDynamicClass]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DynamicClassService }]; }, propDecorators: { ngDynamicClassKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jbGFzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1keW5hbWljLXN0eWxlci9zcmMvbGliL2R5bmFtaWMtY2xhc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7O0FBTTlFLE1BQU0sT0FBTyxxQkFBcUI7SUFHaEMsWUFBb0IsRUFBYyxFQUFVLFlBQWlDO1FBQXpELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFGcEUsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO0lBRXlDLENBQUM7SUFFbEYsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5RCxDQUFDOztrSEFYVSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCO21JQUVVLGlCQUFpQjtzQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEeW5hbWljQ2xhc3NTZXJ2aWNlfSBmcm9tICcuL2R5bmFtaWMtY2xhc3Muc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0R5bmFtaWNDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDbGFzc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbmdEeW5hbWljQ2xhc3NLZXk6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2xhc3NNYW5hZ2VyOiBEeW5hbWljQ2xhc3NTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFuYWdlci5yZWdpc3RlckVsZW1lbnQodGhpcy5uZ0R5bmFtaWNDbGFzc0tleSwgdGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYW5hZ2VyLnVucmVnaXN0ZXJFbGVtZW50KHRoaXMubmdEeW5hbWljQ2xhc3NLZXkpO1xuICB9XG59XG4iXX0=