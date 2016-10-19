import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppComponent }             from './app.component';
import { RestaurantListComponent}   from './restaurant-list.component';
import { RestaurantComponent }      from './restaurant.component';
import { CuisinePipe }              from './cuisine.pipe'

@NgModule ({
  imports:      [BrowserModule],
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantComponent,
    CuisinePipe
  ],
  bootstrap:     [AppComponent]
})

export class AppModule { }
