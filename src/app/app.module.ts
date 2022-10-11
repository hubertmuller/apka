import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { SumaComponent } from './suma/suma.component';
import { ResetComponent } from './reset/reset.component';
import { MultiService } from './multi.service';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    SumaComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MultiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
