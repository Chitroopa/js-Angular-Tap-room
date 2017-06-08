import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ListKegs }   from './list-kegs.component';
import { EditKeg }   from './edit-keg.component';
import { NewKeg } from './new-keg.component';
import { SalePipe } from './sale.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, ListKegs, EditKeg, NewKeg, SalePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
