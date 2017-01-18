import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Here are all the taps</h1>
    <ul>
     <li *ngFor="let currentKeg of kegs">{{currentKeg.nameDrink}} - {{currentKeg.price}} {{currentKeg.alcoholContent}} {{currentKeg.pints}}</li>
   </ul>
  `
})

export class AppComponent {
kegs: Keg[] = [
    new Keg("Duff", "$150", "Simpsons", "Beer", "124 pints"),
    new Keg("Colt 45", "$100", "IDK", "Beer", "120 pints"),
    new Keg("Budlight", "$200", "budwiser", "Beer", "100 pints")
  ];
}

export class Keg {
  constructor(public nameDrink: string, public price: string, public brand: string, public alcoholContent: string, public pints: string){}
}
