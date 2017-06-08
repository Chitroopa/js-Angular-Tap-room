import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <div class="header-line"></div>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand">Tap Room</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a>Home</a></li>
          <li><a href=#>About</a></li>
          <li><a href=#>Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
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
    new Keg('Hop Venom', 'Boneyard', 4.19, 9, true),
    new Keg('Trickester', 'Black Raven', 8.4, 2, false)
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
