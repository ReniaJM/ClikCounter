import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Clik1Component } from './clik1/clik1.component';
import { Clik2Component } from './clik2/clik2.component';
import {LogService} from '../../servises/log.service';

@NgModule({
  declarations: [
    AppComponent,
    Clik1Component,
    Clik2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
