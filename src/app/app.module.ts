import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabviewComponent } from './tabview/tabview.component';
import { TabComponent } from './tabview/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabviewComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
