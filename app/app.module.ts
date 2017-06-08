import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { ListKegs }   from './list-kegs.component';
import { EditKeg }   from './edit-keg.component';
import { NewKeg } from './new-keg.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, ListKegs, EditKeg, NewKeg ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
