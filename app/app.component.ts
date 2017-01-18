import { Component } from '@angular/core';

@Component({
  selector: 'all-kegs',
  template: `
  <div class="well">
    <h1 class="center">Here are all the taps</h1>
    <ul>
     <li class="center" *ngFor="let currentKeg of kegs"><p><span class="som">{{currentKeg.nameDrink}}</span><br> Price: {{currentKeg.price}} <br> Alcohol Content: {{currentKeg.alcoholContent}} <br>Pints: {{currentKeg.pints}}</p><button class="center btn btn-outline-warning" (click)="editKeg(currentKeg)">Edit</button></li>
   </ul>
   <div class="row">
     <div *ngIf="selectedKeg" class="col-md-6 center-form">
        <h3 class="center">Edit</h3>
        <div class="input-group">
          <label>Name</label>
          <input class="form-control" [(ngModel)]="selectedKeg.nameDrink"><br>
        </div>
        <div class="input-group">
          <label>Price</label>
          <span class="input-group-addon">$</span>
          <input class="form-control" [(ngModel)]="selectedKeg.price"><br>
        </div>
        <div class="input-group">
          <label>Alcohol Content</label>
          <input class="form-control" [(ngModel)]="selectedKeg.alcoholContent"><br>
        </div>
        <div class="input-group">
        <label>Pints</label>
        <input class="form-control" [(ngModel)]="selectedKeg.pints"><br>
        </div>
        <br>
        <div class="button-center">
          <button class="center btn btn-outline-success" (click)="finishedEditing()">Save</button>
        </div>
      </div>
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
