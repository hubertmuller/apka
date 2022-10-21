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
    ], updateOn: "change"}),
    plec: new FormControl<string|null>(null, {validators: [], updateOn: 'change'})
  });

  constructor(private sklep: SklepService) { 
    this.forma.controls.imie.valueChanges.subscribe( (imie) => {
      if (imie == "Ala") {
        this.forma.controls.plec.setValue('k');
      }
    });
  }

  przeslijDane() {
    const dane = {
      imie: this.forma.controls.imie.value,
      nazwisko: this.forma.controls.imie.value,
      plec: this.forma.controls.plec.value
    }
    console.log(dane);
    this.sklep.wyslijFormularz(dane).subscribe ( (_: any) => {
      console.log('dane zapisane');
    });
  }

  ngOnInit(): void {
  }

  wartosciDomyslne():void {
    this.forma.controls.imie.setValue('Adam');
    this.forma.controls.nazwisko.setValue('Kowalski');
  }

}
