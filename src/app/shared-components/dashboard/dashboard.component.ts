import { AfterViewInit, Component } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min.js';  // Add other languages if needed


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit{

  ngAfterViewInit() {
    Prism.highlightAll(); // Highlights all <code> blocks
  }

  items = [
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 1' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 2' },
    { title: 'src/app/shared-components/dashboard/dashboard.component.ts', content: 'Content for section 3' },
  ];

  ngOnInit() {
    this.items[0].content = `
    ngAfterViewInit() { 
        Prism.highlightAll();  // Highlights all <code> blocks
    }`;
  }
}
