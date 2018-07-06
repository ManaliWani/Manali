import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsService } from './student.service'; // Import the required service

// Import httpclientmodule
import {HttpClientModule} from '@angular/common/http';
import { Component1Component } from './component1/component1.component'

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule    // Add the name into import
  ],

  providers: [StudentsService],  // Register name of our service
  bootstrap: [AppComponent]
})
export class AppModule { }
