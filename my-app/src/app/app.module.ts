import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Brolog } from 'brolog';
import { WechatyModule } from '@chatie/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WechatyModule
  ],
  providers: [{
    provide: Brolog,
    useFactory: () => Brolog.instance('silly'),
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
