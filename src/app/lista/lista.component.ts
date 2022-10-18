import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

    const ob1 = new Observable( (subscriber) => {
      console.log('observer1');
      subscriber.next(Math.random());
      console.log('observer2');
      subscriber.next(Math.random());
      subscriber.complete();
    })

    ob1.subscribe( (value) => {
      console.log('przyszla' + value);
    });

    ob1.subscribe( (value) => {
      console.log('druga subskrypcja przyszla' + value);
    });


  }

  public dodajDoKoszyka(id: string) {
    console.log(id);
    this.sklep.doKoszyka(id);
  }

  ngOnInit(): void {
  }

  przelicz() {

  }

}
