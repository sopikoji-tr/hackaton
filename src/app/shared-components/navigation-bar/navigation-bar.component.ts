import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  constructor(private router: Router) {}

  onTabChange(event: any): void {
    const tabRoutes = ['/home', '/resolved-logs', '/log-in'];
    const selectedIndex = event.index;
    this.router.navigate([tabRoutes[selectedIndex]]);
  }
}
