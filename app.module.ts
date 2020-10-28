import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelevisionDisplayComponent } from './television-display/television-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TelevisionDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
