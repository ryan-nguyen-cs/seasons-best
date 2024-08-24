import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

import { DrinkService } from '../drink.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  drinks: Drink[] = [];
  availableDrinks: Drink[] = [];
  unavailableDrinks: Drink[] = [];

  drinkService: DrinkService = inject(DrinkService);

  constructor() {
    this.drinks = this.drinkService.getDrinks();
    
    for (let drink of this.drinks) {
      if (drink.availability) {
        this.availableDrinks.push(drink);
      } else {
        this.unavailableDrinks.push(drink);
      }
    }
  }
}
