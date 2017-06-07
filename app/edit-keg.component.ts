import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
@Component({
  selector: 'edit-keg',
  template: `

  <div class="container">
    <div *ngIf="kegList">
      <h1>Edit-kegs</h1>
    </div>
  </div>
  `
})

export class EditKeg {
    @Input() kegList: Keg[];
}
