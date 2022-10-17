import { Component } from '@angular/core';
import { Produkt, SklepService } from './sklep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

  public biezacaData() {
    return Date.now();
  }




}
