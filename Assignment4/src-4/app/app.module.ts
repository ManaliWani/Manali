import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsComponent } from './Os/Os.component';
import { PlComponent } from './Pl/Pl.component';
import { DbComponent } from './Db/Db.component';

@NgModule({
  declarations: [
    AppComponent,
    OsComponent,
    PlComponent,
    DbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
