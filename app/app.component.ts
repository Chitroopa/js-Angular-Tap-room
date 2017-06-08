import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <list-kegs [kegList]="kegs" (editKeg)="editKeg($event)"></list-kegs>
    <edit-keg [kegList]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKeg)="newKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  kegs: Keg[] = [
    new Keg('Hop Venom', 'Boneyard', 4.19, 9),
    new Keg('Trickester', 'Black Raven', 8.4, 2)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    console.log(clickedKeg);
  }

  newKeg(newKegToAdd) {
    this.kegs.push(newKegToAdd);
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
