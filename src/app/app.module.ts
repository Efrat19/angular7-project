import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { SelectboxDirective } from './selectbox.directive';
import { HomeComponent } from './home/home.component';
import { FlightPlanComponent } from './flight-plan/flight-plan.component';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'converter',component:CurrencyComponent},
  {path:'flightPlan',component:FlightPlanComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    SelectboxDirective,
    HomeComponent,
    FlightPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
