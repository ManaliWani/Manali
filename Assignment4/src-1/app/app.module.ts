import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import httpclientmodule
import {HttpClientModule} from '@angular/common/http';
import { ChildComponentComponent } from './child-component/child-component.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    // Add the name into import
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
