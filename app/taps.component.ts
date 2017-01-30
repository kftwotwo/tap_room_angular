import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'tap-list',
  template: `
  <h1 class="center">Here are all the taps</h1>
  <ul>
   <li class="center" *ngFor="let currentKeg of childKeg"><p><span class="som">{{currentKeg.nameDrink}}</span><br> Price: {{currentKeg.price}} <br> Alcohol Content: {{currentKeg.alcoholContent}} <br>Pints: {{currentKeg.pints}}</p><button class="center btn btn-outline-warning" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button></li>
 </ul>
  `
})

export class TapListComponent {
  @Input() childKeg: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
