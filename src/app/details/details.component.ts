import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DrinkService } from '../drink.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  drinkService = inject(DrinkService);
  drink: Drink | undefined;

  constructor() {
    const drinkId = parseInt(this.route.snapshot.params['id'], 10);
    this.drink = this.drinkService.getDrinkById(drinkId);
  }
}
