import { Component } from '@angular/core';

@Component({
  selector: 'all-kegs',
  template: `
  <div class="well">
    <h1 class="center">Here are all the taps</h1>
    <ul>
     <li class="center" *ngFor="let currentKeg of kegs"><p><span class="som">{{currentKeg.nameDrink}}</span><br> Price: {{currentKeg.price}} <br> Alcohol Content: {{currentKeg.alcoholContent}} <br>Pints: {{currentKeg.pints}}</p><button class="center btn btn-warning" (click)="editKeg(currentKeg)">Edit</button><hr></li>
   </ul>
     <div *ngIf="selectedKeg">
        <h3>Edit</h3>
        <label>Enter Task Description:</label>
        <input [(ngModel)]="selectedKeg.nameDrink">
        <br>
        <button (click)="finishedEditing()">Save</button>
      </div>
   </div>
  `
})

export class AppComponent {
kegs: Keg[] = [
    new Keg("Duff", "$150", "Simpsons", "Beer", "124 pints"),
    new Keg("Colt 45", "$100", "IDK", "Beer", "120 pints"),
    new Keg("Budlight", "$200", "budwiser", "Beer", "100 pints")
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}

export class Keg {
  constructor(public nameDrink: string, public price: string, public brand: string, public alcoholContent: string, public pints: string){}
}
