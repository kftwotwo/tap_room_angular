import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-tap',
  template: `
  <div class="row">
    <div *ngIf="childSelectedKeg" class="col-md-6 center-form">
       <h3 class="center">Edit</h3>
       <div class="input-group">
         <label>Name</label>
         <input class="form-control" [(ngModel)]="childSelectedKeg.nameDrink"><br>
       </div>
       <div class="input-group">
         <label>Price</label>
         <span class="input-group-addon">$</span>
         <input class="form-control" [(ngModel)]="childSelectedKeg.price"><br>
       </div>
       <div class="input-group">
         <label>Alcohol Content</label>
         <input class="form-control" [(ngModel)]="childSelectedKeg.alcoholContent"><br>
       </div>
       <div class="input-group">
       <label>Pints</label>
       <input class="form-control" [(ngModel)]="childSelectedKeg.pints"><br>
       </div>
       <br>
       <div class="button-center">
         <button class="center btn btn-outline-success" (click)="doneButtonClicked()">Save</button>
       </div>
     </div>
   </div>
  `
})

export class EditTapComonent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
