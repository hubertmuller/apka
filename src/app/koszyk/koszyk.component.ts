import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Produkt, SklepService } from '../sklep.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.scss']
})
export class KoszykComponent implements OnInit, OnDestroy {

  public zawartoscKoszyka: string[] = []; 
  private sub: Subscription;
  private sub2: Subscription;
  public wszystkieProdukty: Produkt[] = [];

  constructor(private sklep: SklepService) { 
    console.log('konstruktor komponentu statuje');

    this.sub = sklep.basket.subscribe( (wartoscBasket) => {
        this.zawartoscKoszyka = wartoscBasket;
        console.log(`sledzony koszyk z komponentu koszyk: ${wartoscBasket}`);
    });

    this.sub2 = this.sklep.produkty.subscribe( (produkty) => {
      this.wszystkieProdukty = produkty;
  })


  }

  listaProduktowWKoszyku(): [] {
    //tutaj trzeba stworzyc tablice z nazwami na postawie id produktow w koszyku
    return [];
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
