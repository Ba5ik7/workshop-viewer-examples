import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParentChildDesignModule } from '@tmdjr/workshop-examples/src/lib/route-reuse-strategy/parent-child-design';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentChildDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
