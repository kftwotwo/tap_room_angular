import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'all-kegs',
  template: `
  <div class="well">
    <new-tap (newKegSender)="addKeg($event)"></new-tap>
    <tap-list [childKeg]="masterKegs" (clickSender)="editKeg($event)"></tap-list>
   <edit-tap [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-tap>
   </div>
  `
})

export class AppComponent {

  masterKegs: Keg[] = [
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

  addKeg(newKegFromChild: Keg) {
    this.masterKegs.push(newKegFromChild);
  }
}
