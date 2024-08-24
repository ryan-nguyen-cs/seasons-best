import { Injectable } from '@angular/core';
import { Drink } from './drink';
import * as drinks from '../assets/drinks.json';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  getDrinks(): Drink[] {
    let drinkList = drinks;
    return drinkList.drinks;
  }

  getDrinkById(id: number) {
    return this.getDrinks().find(drink => drink.id == id);
  }
}
