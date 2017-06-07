import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
@Component({
  selector: 'new-keg',
  template: `
  <div class="container">
    <h1>new keg!</h1>
    <div>
     <label>Enter Name:</label>
     <input #newName>
     <label>Enter Brand:</label>
     <input #newBrand>
     <label>Enter Price:</label>
     <input #newPrice>
     <label>Enter Alcohol Content:</label>
     <input #newAlcoholContent>
     <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
   </div>
  </div>
  `
})

export class NewKeg {
  @Output() newKeg = new EventEmitter();

  submitForm(name: string, brand:string, price: number, alcoholContent: number){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKeg.emit(newKegToAdd);
  }
}
