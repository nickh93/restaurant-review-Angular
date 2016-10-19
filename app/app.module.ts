import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppComponent }             from './app.component';
import { RestaurantListComponent}   from './restaurant-list.component';
import { RestaurantComponent }      from './restaurant.component';

@NgModule ({
  imports:      [BrowserModule],
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantComponent
  ],
  bootstrap:     [AppComponent]
})

export class AppModule { }
