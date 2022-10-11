import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() {
    console.log('Kalkulator Service startuje');
  }

  public suma(liczba1: number, liczba2: number): number {
    return liczba1 + liczba2;
  }

  public roznica(liczba1: number, liczba2: number): number {
    return liczba1 - liczba2;
  }

  public iloczyn(liczba1: number, liczba2: number): number {
    return liczba1 * liczba2;
  }

  public iloraz(liczba1: number, liczba2: number): number {
    return liczba1 / liczba2;
  }

  public tlumaczTryb(tryb: number): string  {
  switch(tryb){
      case 0:
      return 'Suma';
    case 1:
      return 'Różnica';
    case 2:
      return 'Iloczyn';
    default:
      return 'Iloraz';
    }
  }

  

  public operacja (l1: number, l2: number, tryb: number) {
    switch(tryb){
      case 0:
      return this.suma(l1, l2);
    case 1:
      return this.roznica(l1, l2);
    case 2:
      return this.iloczyn(l1, l2);
    default:
      return this.iloraz(l1, l2);
    }
  }
}
