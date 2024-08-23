import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'catalog',
        component: CatalogComponent,
        title: 'Catalog',
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        title: 'Calendar',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About',
    },
    {
        path: 'feedback',
        component: FeedbackComponent,
        title: 'Feedback',
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Drink Details'
    }
];
