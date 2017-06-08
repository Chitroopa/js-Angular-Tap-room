import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
@Component({
  selector: 'list-kegs',
  template: `
  <div class="container">
    <h1>list-kegs</h1>
    <br>
    <div [class]="priceColoring(currentKeg)"*ngFor="let currentKeg of kegList" >
      <h3>{{currentKeg.name}}</h3>
      <h5>Brand: {{currentKeg.brand}}</h5>
      <h5 [class]="pintsLeftColor(currentKeg)">Pints Left: {{currentKeg.pints}}</h5>
      <h5 *ngIf="currentKeg.soldOut" class="sold-out">**Sold Out**</h5>
      <h5>price: {{sign}}{{currentKeg.price}}</h5>
      <h5 [class]="alcoholStyling(currentKeg)">Alcohol Content: {{currentKeg.alcoholContent}}%</h5>
      <h5>On Sale: {{currentKeg.onSale}}</h5>
      <a href='#' (click)="sellPint(currentKeg)">Sell Pint</a>
      <a href='#' (click)="editKegButton(currentKeg)" >edit</a>
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
  sellPint(kegSold: Keg) {
    if (kegSold.pints > 0)
    {
      kegSold.pints -= 1;
      if (kegSold.pints <= 0)
      {
        kegSold.soldOut = true;
      }
    }
    else
    {
      kegSold.soldOut = true;
    }
    this.pintsLeftColor(kegSold);
  }

  pintsLeftColor(currentKeg){
    if(currentKeg.pints < 10)
    {
      return "bg-low";
    }
    else if (currentKeg.pints < 100)
    {
      return "bg-medium";
    }
    else {
      return "bg-full";
    }
  }
  priceColoring(currentKeg){
    if(currentKeg.price > 5){
      return "bg-warning";
    } else{
      return "bg-success";
    }
  }
  alcoholStyling(currentKeg){
    if(currentKeg.alcoholContent > 5){
      return "high-alcohol";
    } else{
      return "low-alcohol";
    }
  }
}
