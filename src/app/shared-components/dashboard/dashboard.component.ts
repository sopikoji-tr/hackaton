import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  items = [
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 1' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 2' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 3' },
  ];

}
