import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router, NavigationStart } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'boba-site';

  showLogo: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if(e['url'] == '/') {
          this.showLogo = false;
        } else {
          this.showLogo = true;
        }
      }
    });
  }
}
