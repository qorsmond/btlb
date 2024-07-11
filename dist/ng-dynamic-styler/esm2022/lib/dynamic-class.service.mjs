import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicClassService {
    elementRegistry = new Map();
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DynamicClassService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DynamicClassService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DynamicClassService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jbGFzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZHluYW1pYy1zdHlsZXIvc3JjL2xpYi9keW5hbWljLWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFLekMsTUFBTSxPQUFPLG1CQUFtQjtJQUN0QixlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7SUFFekQsZUFBZSxDQUFDLEdBQVcsRUFBRSxPQUFvQjtRQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXLEVBQUUsU0FBaUI7UUFDckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQVcsRUFBRSxTQUFpQjtRQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7dUdBdkJVLG1CQUFtQjsyR0FBbkIsbUJBQW1CLGNBRmxCLE1BQU07OzJGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ2xhc3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBlbGVtZW50UmVnaXN0cnkgPSBuZXcgTWFwPHN0cmluZywgSFRNTEVsZW1lbnQ+KCk7XG5cbiAgcmVnaXN0ZXJFbGVtZW50KGtleTogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZ2lzdHJ5LnNldChrZXksIGVsZW1lbnQpO1xuICB9XG5cbiAgdW5yZWdpc3RlckVsZW1lbnQoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWdpc3RyeS5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIGFkZENsYXNzKGtleTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWdpc3RyeS5nZXQoa2V5KTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ2xhc3Moa2V5OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZ2lzdHJ5LmdldChrZXkpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==