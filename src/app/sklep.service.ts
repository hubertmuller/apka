import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SklepService {

  constructor(private http: HttpClient) { 
  }

  pobierzProdukty(): Observable<Produkt[]> {
    console.log('poczatek pobierania produktow');
    return this.http.get<Produkt[]>(
      "https://634835f40b382d796c6c8ef0.mockapi.io/produkty"
      );
  }
}

export interface Produkt {
  id: string;
  name: string;
  cena: string;
  kategoria: number;
}