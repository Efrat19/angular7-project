import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { SelectboxDirective } from './selectbox.directive';
import { HomeComponent } from './home/home.component';
import { FlightPlanComponent } from './flight-plan/flight-plan.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SpachshipComponent } from './spachship/spachship.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'converter',component:ReactiveFormComponent},
  {path:'flightPlan',component:FlightPlanComponent},
  {path:'spaceship',component:SpachshipComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    SelectboxDirective,
    HomeComponent,
    FlightPlanComponent,
    ReactiveFormComponent,
    SpachshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
