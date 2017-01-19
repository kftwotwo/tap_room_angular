import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-tap',
  template: `
  <label>Enter Task Brand:</label>
    <input #newName>
    <label>Enter Price:</label>
    <input #newPrice>
    <label>Enter Alcohol Content:</label>
    <input #newAlcoholContent>
    <label>Enter Pints:</label>
    <input #newPints>
    <button (click)="submitForm(newName.value, newPrice.value, newAlcoholContent.value, newPints.value); newName.value=''; newPrice.value=''; newAlcoholContent.value=''; newPints.value='';">Add</button>
  `
})

export class NewTapComponent {
  @Output() newKegSender = new EventEmitter;

  submitForm(nameDrink: string, price: string, brand: string, alcoholContent: string, pints: string) {
    var newKegToAdd: Keg = new Keg(nameDrink, price, brand, alcoholContent, pints);
    this.newKegSender.emit(newKegToAdd);
  }
}
