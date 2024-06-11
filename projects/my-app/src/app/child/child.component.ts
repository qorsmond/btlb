import {Component, OnInit} from '@angular/core';
import {DynamicClassService} from 'ng-dynamic-styler';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private classManager: DynamicClassService) { }

  applyClass(): void {
    console.log('Applying class');
    this.classManager.addClass('mainContainer', 'new-container');
  }

  removeClass(): void {
    this.classManager.removeClass('mainContainer', 'new-container');
  }

  ngOnInit(): void {
  }

}
