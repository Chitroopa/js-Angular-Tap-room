import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "sale",
  pure: false
})

export class SalePipe implements PipeTransform {
  transform(input: Keg[], saleType) {
    var output: Keg[] = [];
    if(saleType === "on sale") {
      for (var i = 0; i< input.length; i++) {
        if (input[i].onSale === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (saleType === "non-sale") {
      for (var i = 0; i<input.length; i++) {
        if (input[i].onSale === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
