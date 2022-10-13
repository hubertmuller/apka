import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';
import { MultiService } from '../multi.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  providers:  [ MultiService ]
})
export class ResetComponent implements OnInit {

  @Output()
  doWywolania: EventEmitter<number> = new EventEmitter();

  constructor(public ks: KalkulatorService, 
    public ms: MultiService) { }

  ngOnInit(): void {
  }

  resetuj():void {
    this.doWywolania.emit(1);
  }

}
