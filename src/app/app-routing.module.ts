import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared-components/dashboard/dashboard.component';
import { LogInComponent } from './shared-components/log-in/log-in.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'resolved-logs', component: DashboardComponent },
  { path: 'log-in', component: LogInComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
