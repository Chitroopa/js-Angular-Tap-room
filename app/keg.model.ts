export class Keg {
  public pints: number = 124;
  public soldOut: boolean = false;
  constructor(public name: string, public brand:string, public price: number, public alcoholContent: number, public onSale: boolean) { }
}
