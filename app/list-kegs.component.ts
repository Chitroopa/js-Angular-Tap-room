import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
@Component({
  selector: 'list-kegs',
  template: `
  <div class="container">
    <h1>list-kegs</h1>
    <br>
    <div *ngFor="let currentKeg of kegList">
      <h3>{{currentKeg.name}}</h3>
      <h5>Brand: {{currentKeg.brand}}</h5>
      <h5>price: {{sign}}{{currentKeg.price}}</h5>
      <h5>Alcohol Content: {{currentKeg.alcoholContent}}%</h5>
      <a href='#' (click)="editKegButton(currentKeg)">edit</a>
    </div>
  </div>
  `
})

export class ListKegs {
  @Input() kegList: Keg[];
  @Output() editKeg = new EventEmitter();
  sign: string = "$";

  editKegButton(kegToEdit: Keg) {
    this.editKeg.emit(kegToEdit);
  }
}
