import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cc'
})
export class CurrencyConverterPipe implements PipeTransform {



  transform(cena: string, waluta: string): string {
    const conv = this.przelicz(parseFloat(cena), waluta);
    return `${conv} ${waluta}`;
  }

  private przelicz (cena: number, waluta: string) {
    let przeliczonaCena: number;
    if (waluta == 'USD') {
      return cena * 4.96    
    } else {
      return cena;
    }
  }

}
