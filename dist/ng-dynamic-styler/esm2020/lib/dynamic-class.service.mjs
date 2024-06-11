import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicClassService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jbGFzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZHluYW1pYy1zdHlsZXIvc3JjL2xpYi9keW5hbWljLWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFLekMsTUFBTSxPQUFPLG1CQUFtQjtJQUhoQztRQUlVLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7S0F1QjFEO0lBckJDLGVBQWUsQ0FBQyxHQUFXLEVBQUUsT0FBb0I7UUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUFXO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVyxFQUFFLFNBQWlCO1FBQ3JDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQVcsRUFBRSxTQUFpQjtRQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0hBdkJVLG1CQUFtQjtvSEFBbkIsbUJBQW1CLGNBRmxCLE1BQU07MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDbGFzc1NlcnZpY2Uge1xuICBwcml2YXRlIGVsZW1lbnRSZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBIVE1MRWxlbWVudD4oKTtcblxuICByZWdpc3RlckVsZW1lbnQoa2V5OiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVnaXN0cnkuc2V0KGtleSwgZWxlbWVudCk7XG4gIH1cblxuICB1bnJlZ2lzdGVyRWxlbWVudChrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZ2lzdHJ5LmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgYWRkQ2xhc3Moa2V5OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZ2lzdHJ5LmdldChrZXkpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVDbGFzcyhrZXk6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVnaXN0cnkuZ2V0KGtleSk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19