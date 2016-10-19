import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Restaurant Review</h1>
    <restaurant-list
      [childRestaurantList]="masterRestaurantList"></restaurant-list>
  </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [
    new Restaurant("Streetside", "Vietnamese", "small casual Vietnamese street food", "123 Girard Avenue", "$$", 0),
    new Restaurant("Del Friscos", "Italian", "High-end table service with wide wine selection", "1501 Sansom", "$$$$$", 1),
    new Restaurant("Yuh Kee", "Korean", "food truck in University Ave, despite it's name, the food is not yucky", "1900 University Avenue", "$", 2),
    new Restaurant("Colonial Pizza", "American", "mid-sized pizza shop with wide varieties made with organic locally grown ingredients", "323 43rd Street", "$$$", 3)
  ];

  selectedRestaurant: Restaurant = null;

}
