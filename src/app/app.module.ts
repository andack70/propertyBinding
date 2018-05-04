import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NumberOneComponent } from './number-one/number-one.component';
import { NumberTwoComponent } from './number-two/number-two.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NumberOneComponent,
    NumberTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
