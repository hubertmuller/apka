import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'apka';
  //private prywatne = 'test';

  constructor() {
  }

  public biezacaData() {
    return Date.now();
  }
}
