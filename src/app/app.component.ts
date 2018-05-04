import { Person } from './Person.interface';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  person: Person = {
    name : 'Cambiar una imagen despues de 3 segundos, o modificar el valor a partir del hijo',
    myPath: 'https://www.chiquipedia.com/images/gifs-animados-personajes-pokemon-2.gif'
  };

  calculatorResult = 0;
  valueNumber1 = 0;
  valueNumber2 = 0;

  showAction() {
    alert('Esto es un evento desde el boton');
  }

  print(dato: String) {
    console.log(dato);
  }

  constructor() {
    setTimeout(() => {
      this.person.myPath = 'https://www.chiquipedia.com/images/gifs-personajes-pokemon.gif';
    }, 3000);
  }

  // modifify child
  modifyValue(value: string) {
    console.log(value);
    this.person.name = value;
  }
  assignValue1(value: number) {
    this.valueNumber1 = value;
  }

  assignValue2(value: number) {
    this.valueNumber2 = value;
  }

  sumaryCalculator() {
    this.calculatorResult = +this.valueNumber1 + +this.valueNumber2;
  }
}
