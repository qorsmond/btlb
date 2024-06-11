import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgDynamicStylerModule} from 'ng-dynamic-styler';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, NgDynamicStylerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
