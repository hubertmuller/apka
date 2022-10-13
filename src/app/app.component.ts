import { Component } from '@angular/core';
import { Produkt, SklepService } from './sklep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public ladujeDane = true;
  public title = 'apka';
  public pobraneProdukty: Produkt[];
  //private prywatne = 'test';

  constructor(sklep: SklepService) {
    this.pobraneProdukty = [];
    console.log('przed zawolaniem metody');
    let produkty = sklep.pobierzProdukty();
    console.log('po zawolaniu metody');

    produkty.subscribe( (tablicaProduktow) => {
      this.ladujeDane = false;
      this.pobraneProdukty = tablicaProduktow;
      console.log('pobrano produkty');
      console.log(produkty);
    } )
  }

  public biezacaData() {
    return Date.now();
  }

  public dodajDoKoszyka(id: string) {
    console.log(id);
  }
}
