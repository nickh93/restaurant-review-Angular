import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Restaurant } from "./restaurant.model";

@Component ({
  selector: 'restaurant-list',
  template: `
  <div *ngFor="let currentRestaurant of childRestaurantList">
  <restaurant-display [restaurant]="currentRestaurant"></restaurant-display>
  </div>

  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];

}
