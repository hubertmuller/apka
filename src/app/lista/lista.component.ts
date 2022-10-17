import { Component, OnInit } from '@angular/core';
import { Produkt, SklepService } from '../sklep.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public ladujeDane = true;
  public title = 'apka';
  public pobraneProdukty: Produkt[];

  constructor(private sklep: SklepService) {
    this.pobraneProdukty = [];
    console.log('przed zawolaniem metody');
    let produkty = this.sklep.pobierzProdukty();
    console.log('po zawolaniu metody');

    produkty.subscribe( (tablicaProduktow) => {
      this.ladujeDane = false;
      this.pobraneProdukty = tablicaProduktow;
      console.log('pobrano produkty');
      console.log(produkty);
    } )
  }

  public dodajDoKoszyka(id: string) {
    console.log(id);
    this.sklep.doKoszyka(id);
  }

  ngOnInit(): void {
  }

}
