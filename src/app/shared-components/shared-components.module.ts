import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SearchComponent } from './search/search.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        DashboardComponent,
        NavigationBarComponent,
        LogInComponent,
        SearchComponent
    ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    DashboardComponent,
    NavigationBarComponent,
    LogInComponent,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class SharedComponentsModule { }
