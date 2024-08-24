import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsEntry } from '../news-entry';
import { NewsService } from '../news.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterModule } from '@angular/router';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbAccordionModule, RouterLink, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  newsEntries!: NewsEntry[];
  newsService: NewsService = inject(NewsService);
  photoURL: string;

  favoriteDrinks: Drink[] = [];
  drinkService: DrinkService = inject(DrinkService);

  constructor() {
    this.newsEntries = this.newsService.getNewsEntries();
    this.photoURL = this.newsEntries[0].photo;

    let drinks = this.drinkService.getDrinks();
    
    for (let drink of drinks) {
      if (drink.favorite) {
        this.favoriteDrinks.push(drink);
      }
    }
  }

  getImageData(newsEntry: NewsEntry) {
    this.photoURL = newsEntry.photo;
  }
}
