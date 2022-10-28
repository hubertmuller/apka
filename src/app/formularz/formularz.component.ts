import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SklepService } from '../sklep.service';

class NaszValidator {
  static wymaganeNazwisko(koncowka: string): any {
    return function (control: FormControl) {
      if (control.value.endsWith(koncowka)) {
        return null;
      } else {
        return { 'wymaganenazwisko' : "Nazwisko nie konczy sie na " + koncowka};
      }
    }
  }
}


@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit {

  public forma = new FormGroup({
    imie: new FormControl('Hubert', {validators: [
      Validators.maxLength(30),
      Validators.minLength(3),
      Validators.required
    ], updateOn: "change"}),
    nazwisko: new FormControl('Kowalski', {validators: [
      NaszValidator.wymaganeNazwisko('ska')
      //Validators.pattern(/^[0-9]{2,2}[\-]{1,1}[0-9]{3,3}$/g)
    ], updateOn: "change"}),
    plec: new FormControl<string|null>(null, {validators: [], updateOn: 'change'}),
    status: new FormGroup(
      {
        emeryt: new FormControl( null , { validators: [], updateOn: "change"}),
        rokEmerytury: new FormControl( null , { validators: [], updateOn: "change"}),
        pracujacy: new FormControl( null , { validators: [], updateOn: "change"}),
        rokPracy: new FormControl( null , { validators: [], updateOn: "change"}),
      }
    ),
    samochod: new FormControl( null, { validators: [], updateOn: "change"}),
  });
  pokazRokEmerytury = false;
  pokazRokPracy = false;

  constructor(private sklep: SklepService) { 


    this.forma.controls.imie.valueChanges.subscribe( (imie) => {
      if (imie == "Ala") {
        this.forma.controls.plec.setValue('k');
      }
    });

    this.forma.controls.status.controls.emeryt.valueChanges.subscribe ( (emeryt) => {
      if (emeryt == true) {
        this.pokazRokEmerytury = true;
      } else {
        this.pokazRokEmerytury = false;
      }
    });

    this.forma.controls.status.controls.pracujacy.valueChanges.subscribe ( (pracownik) => {
      if (pracownik == true) {
        this.pokazRokPracy = true;
      } else {
        this.pokazRokPracy = false;
      }
    });



  }

  przeslijDane() {
    const dane = {
      imie: this.forma.controls.imie.value,
      nazwisko: this.forma.controls.nazwisko.value,
      plec: this.forma.controls.plec.value,
      samochod: this.forma.controls.samochod.value
    }
    console.log(dane);
    this.sklep.wyslijFormularz(dane).subscribe ( (_: any) => {
      alert('Formularz wysłany');
    });
  }

  ngOnInit(): void {
  }

  wartosciDomyslne():void {
    this.forma.controls.imie.setValue('Adam');
    this.forma.controls.nazwisko.setValue('Kowalski');
  }

}
