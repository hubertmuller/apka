import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Produkt, SklepService } from '../sklep.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.scss']
})
export class KoszykComponent implements OnInit, OnDestroy {

  public zawartoscKoszyka: string[] = []; // 1,2,1,3,4,1,7
  private sub: Subscription;
  private sub2: Subscription;
  public wszystkieProdukty: Produkt[] = []; // [ {name: 'jakis produkt1', id: '2',...}, {name: 'jakis produkt1', id: '3',...}]

  constructor(private sklep: SklepService) { 
    console.log('konstruktor komponentu statuje');

    this.sub = this.sklep.basket.subscribe( (wartoscBasket) => {
        this.zawartoscKoszyka = wartoscBasket;
        console.log(`sledzony koszyk z komponentu koszyk: ${wartoscBasket}`);
    });

    this.sub2 = this.sklep.produkty.subscribe( (produkty) => {
      this.wszystkieProdukty = produkty;
  })


  }

  listaProduktowWKoszyku(): string[] {
    //tutaj trzeba stworzyc tablice z nazwami na postawie id produktow w koszyku
    // ['1','2']

    const znalezione: string[] = [];

    /*
    for(let i=0; i < this.zawartoscKoszyka.length; i++) { 
      let elementWKoszyku = this.zawartoscKoszyka[i];
      for(let j=0; j < this.wszystkieProdukty.length; j++) { 
        if (this.wszystkieProdukty[j].id == elementWKoszyku) {
          //znalezlismy, trzeba dodac do listy wyszukanych
          znalezione.push(this.wszystkieProdukty[j].name)
        }
      }
    }
    */

    /*
    for(let elementWKoszyku of this.zawartoscKoszyka) {
      for(let produkt of this.wszystkieProdukty) { 
        if (produkt.id == elementWKoszyku) {
          znalezione.push(produkt.name);
        }
      }
    }
    */

    let mojaFunkcja = (a: number) => {return a+1};
    
    let mojaFunkcja2 = function(a: number) {return a+1} ;

    [].sort

    this.zawartoscKoszyka.forEach((elementWKoszyku, index, arr) => {
      let odnaleziony = this.wszystkieProdukty.find((produkt) => {
        return produkt.id == elementWKoszyku 
      })
      if (odnaleziony) znalezione.push(odnaleziony.name) 
    });



    return znalezione;
  }

  stop() : void {
    console.log('stop');
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    console.log('komponent statuje');
  }

  ngOnDestroy(): void {
    console.log('komponent konczy swoje zycie');
    this.sub.unsubscribe();
  }

}
