import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SklepService {


  public basket: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);
  private listaProduktow: Observable<Produkt[]>;
  //public koszyk: string[] = [];

  constructor(private http: HttpClient) { 
    this.listaProduktow = this.pobierzProdukty2();
  }

  
  wyslijFormularz(dane: any) {
    return this.http.post<any>(
      "https://634835f40b382d796c6c8ef0.mockapi.io/formularz"
      , dane);
  }

  doKoszyka(id: string) {
    //this.koszyk.push(id);
    //this.basket.next(this.koszyk);

    //this.basket.value.push(id);

    let kosz = this.basket.value;
    kosz.push(id);

    this.basket.next(kosz);


    //console.log(this.koszyk);
  }

  pobierzProdukty(): Observable<Produkt[]> {
    console.log('poczatek pobierania produktow');
    return this.http.get<Produkt[]>(
      "https://634835f40b382d796c6c8ef0.mockapi.io/produkty"
      );
  }

  pobierzProdukty2(): Observable<Produkt[]> {
    console.log('poczatek pobierania produktow');
    return this.http.get<Produkt[]>(
      "https://634835f40b382d796c6c8ef0.mockapi.io/produkty"
      );
  }

  
  public get produkty() : Observable<Produkt[]> {
    return this.listaProduktow;
  }
  
}

export interface Produkt {
  id: string;
  name: string;
  cena: string;
  kategoria: number;
}