import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { InlineComponent } from './inline/inline.component';
import { MarvellousCompComponent } from './marvellous-comp/marvellous-comp.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    InlineComponent,
    MarvellousCompComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
