import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <list-kegs [kegList]="kegs"></list-kegs>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Hop Venom', 'Boneyard', 8.4, 9),
    new Keg('Trickester', 'Black Raven', 8.4, 8)
  ];
}
