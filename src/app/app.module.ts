import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { SumaComponent } from './suma/suma.component';
import { ResetComponent } from './reset/reset.component';
import { MultiService } from './multi.service';
import { HttpClientModule } from '@angular/common/http';
import { KoszykComponent } from './koszyk/koszyk.component';
import { FormularzComponent } from './formularz/formularz.component';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    SumaComponent,
    ResetComponent,
    KoszykComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MultiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
