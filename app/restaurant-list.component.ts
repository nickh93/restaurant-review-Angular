import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Restaurant } from "./restaurant.model";

@Component ({
  selector: 'restaurant-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">All Cuisines</option>
    <option value="italian">Italian</option>
    <option value="vietnamese">Vietnamese</option>
    <option value="american">American</option>
    <option value="korean">Korean</option>
  </select>
  <div *ngFor="let currentRestaurant of childRestaurantList | cuisine:selectedCuisine">
    <restaurant-display [restaurant]="currentRestaurant"></restaurant-display>
  </div>

  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  public selectedCuisine: string = "all";
  onChange(optionFromMenu) {
    this.selectedCuisine = optionFromMenu;
    console.log(this.selectedCuisine);
  }
}
