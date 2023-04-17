import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FloatingActionButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
