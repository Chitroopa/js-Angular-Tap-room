import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ListKegs }   from './list-kegs.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, ListKegs ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
