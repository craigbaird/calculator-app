import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationListComponent } from './components/calculation-list/calculation-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'calculation', component: CalculationListComponent},
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }