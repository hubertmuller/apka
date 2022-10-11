import { Component, Input, OnInit } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';
import { MultiService } from '../multi.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {

  @Input()
  public liczba1!: number;
  @Input()
  public liczba2!: number;
  public tryb = 0;


  constructor(public ks: KalkulatorService, 
    public ms: MultiService) {
      //ms.test();
  }

  ngOnInit(): void {
  }

  public ustawTryb(tryb: number): void {
    this.tryb = tryb;
  }

  reset(mode = 0):void {
    this.tryb = mode;
  }


}
