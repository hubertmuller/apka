import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Produkt, SklepService } from '../sklep.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public ladujeDane = true;
  public title = 'apka';
  public pobraneProdukty: Produkt[];

  constructor(private sklep: SklepService) {
    this.pobraneProdukty = [];
    console.log('przed zawolaniem metody');
    let produkty = this.sklep.pobierzProdukty();
    console.log('po zawolaniu metody');

    produkty.subscribe( (tablicaProduktow) => {
      this.ladujeDane = false;
      this.pobraneProdukty = tablicaProduktow;
      console.log('pobrano produkty');
      console.log(produkty);
    } )

    const ob1 = new Observable( (subscriber) => {
      console.log('observable generuje wartosc 1');
      subscriber.next(Math.random());
      console.log('observable generuje wartosc 2');
      subscriber.next(Math.random());
      subscriber.complete();
    })

    console.log('po utworzeniu observable');

    ob1.subscribe( (value) => {
      console.log('pierwsza subskrypcja przyszla' + value);
    });


    console.log('po pierwszej subskrypcji');


    ob1.subscribe( (value) => {
      console.log('druga subskrypcja przyszla' + value);
    });


    console.log('po drugiej subskrypcji');


    const subject = new Subject<number>();

    subject.next(2);

    subject.subscribe( (v) => {
        console.log('subject - pierwsza' + v);
    })

    subject.next(3);
    subject.next(4);
    subject.next(10);

    subject.subscribe( (v) => {
      console.log('subject - druga' + v);
    })

    subject.next(11);

    const subject2 = new BehaviorSubject<number>(1);

    subject2.subscribe( (v) => {
      console.log('behavior subject - pierwsza ' + v);
    })

    subject2.next(19);

    subject2.subscribe( (v) => {
      console.log('behavior subject - drugaa ' + v);
    })

    const subject3 = new ReplaySubject<number>();

    subject3.next(33);
    subject3.next(44);
    subject3.next(55);

    subject3.subscribe( (v) => {
      console.log('replay subject - pierwsza ' + v);
    })

    subject3.next(4);
    subject3.next(5);

    subject3.subscribe( (v) => {
      console.log('replay subject - druga' + v);
    })

    subject3.next(6);    
    subject3.next(66);


  }

  public dodajDoKoszyka(id: string) {
    console.log(id);
    this.sklep.doKoszyka(id);
  }

  ngOnInit(): void {
  }

  przelicz() {

  }

}
