import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

@NgModule({
  declarations: [AppComponent, PhoneNumberPipe],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
