import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <list-kegs [kegList]="kegs" (editKeg)="editKeg($event)"></list-kegs>
    <edit-keg [kegList]="selectedKeg"></edit-keg>
    <new-keg (newKeg)="newKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  kegs: Keg[] = [
    new Keg('Hop Venom', 'Boneyard', 8.4, 9),
    new Keg('Trickester', 'Black Raven', 8.4, 8)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    console.log(clickedKeg);
  }

  newKeg(newKegToAdd) {
    this.kegs.push(newKegToAdd);
  }
}
