import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NewsapiservicesService} from './service/newsapiservices.service'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { HealthComponent } from './health/health.component'
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusinessComponent,
    EntertainmentComponent,
    SportsComponent,
    TechnologyComponent,
    HealthComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoadingBarHttpClientModule
     
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
