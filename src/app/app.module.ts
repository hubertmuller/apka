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
import { NawigacjaComponent } from './nawigacja/nawigacja.component';
import { ListaComponent } from './lista/lista.component';
import { ZamowieniaComponent } from './zamowienia/zamowienia.component';
import { CurrencyConverterPipe } from './currency-converter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    SumaComponent,
    ResetComponent,
    KoszykComponent,
    FormularzComponent,
    NawigacjaComponent,
    ListaComponent,
    ZamowieniaComponent,
    CurrencyConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MultiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
