import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicClassService {
  private elementRegistry = new Map<string, HTMLElement>();

  registerElement(key: string, element: HTMLElement): void {
    this.elementRegistry.set(key, element);
  }

  unregisterElement(key: string): void {
    this.elementRegistry.delete(key);
  }

  addClass(key: string, className: string): void {
    const element = this.elementRegistry.get(key);
    if (element) {
      element.classList.add(className);
    }
  }

  removeClass(key: string, className: string): void {
    const element = this.elementRegistry.get(key);
    if (element) {
      element.classList.remove(className);
    }
  }
}
