import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
@Component({
  selector: 'edit-keg',
  template: `
  <div class="container">
    <div *ngIf="kegList">
    <div>
     <label>Enter Name:</label>
     <input [(ngModel)]="kegList.name">
     <label>Enter Brand:</label>
     <input [(ngModel)]="kegList.brand">
     <label>Enter Price:</label>
     <input [(ngModel)]="kegList.price">
     <label>Enter Alcohol Content:</label>
     <input [(ngModel)]="kegList.alcoholContent">
     <button (click)="doneButtonClicked()">Done</button>
   </div>
    </div>
  </div>
  `
})

export class EditKeg {
    @Input() kegList: Keg[];
    @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
