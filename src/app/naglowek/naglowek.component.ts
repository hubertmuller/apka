import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.scss']
})
export class NaglowekComponent implements OnInit {

  @Input('nazwaFirmy')
  public tytul!: string;
  @Input('koszyk')
  public koszyk!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

