import { Injectable } from '@angular/core';
import { NewsEntry } from './news-entry';
import * as newsEntries from '../assets/news.json';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getNewsEntries(): NewsEntry[] {
    return newsEntries.entries;
  }

}
