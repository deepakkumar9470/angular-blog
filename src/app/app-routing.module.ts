import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import {BusinessComponent} from './business/business.component'
import {EntertainmentComponent} from './entertainment/entertainment.component'
import {SportsComponent} from './sports/sports.component'
import {TechnologyComponent} from './technology/technology.component'
import {HealthComponent} from './health/health.component'

const routes: Routes = [
 {path : '', component : HeaderComponent}, // Home
 {path : 'business', component : BusinessComponent}, // Business news
 {path : 'entertainment', component : EntertainmentComponent}, // Enter news
 {path : 'sports', component : SportsComponent}, // Sports news 
 {path : 'tech', component : TechnologyComponent}, // Tech news
 {path : 'health', component : HealthComponent}, // Tech news
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
