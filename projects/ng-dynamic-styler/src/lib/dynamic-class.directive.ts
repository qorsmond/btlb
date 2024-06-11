import {Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import {DynamicClassService} from './dynamic-class.service';

@Directive({
  selector: '[ngDynamicClass]'
})
export class DynamicClassDirective implements OnInit, OnDestroy {
  @Input() ngDynamicClassKey: string = '';

  constructor(private el: ElementRef, private classManager: DynamicClassService) { }

  ngOnInit(): void {
    this.classManager.registerElement(this.ngDynamicClassKey, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.classManager.unregisterElement(this.ngDynamicClassKey);
  }
}
