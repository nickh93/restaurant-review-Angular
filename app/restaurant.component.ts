import { Component, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  template: `
  <div>
  <ul>
    <li>{{ restaurant.name }}</li>
    <ul>
      <li>Cuisine: {{ restaurant.cuisine }}</li>
      <li>Description: {{ restaurant.description }}</li>
      <li>Location: {{ restaurant.address }}</li>
      <li>{{ restaurant.price }}</li>
      <li>Id: {{ restaurant.id }}</li>
    </ul>
  </ul>
  </div>
  `
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;
}
