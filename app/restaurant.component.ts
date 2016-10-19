import { Component, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  template: `
  <div>
  <ul>
    <li (click)="showDetails()">{{ restaurant.name }}</li>
    <div *ngIf="display === true">
      <ul>
        <li>Cuisine: {{ restaurant.cuisine }}</li>
        <li>Description: {{ restaurant.description }}</li>
        <li>Location: {{ restaurant.address }}</li>
        <li>{{ restaurant.price }}</li>
        <li>Id: {{ restaurant.id }}</li>
      </ul>
    </div>
  </ul>
  </div>
  `
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;
  public display:boolean = false;
  showDetails() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }

}
