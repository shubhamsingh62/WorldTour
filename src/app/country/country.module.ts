import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCountryComponent } from './all-country/all-country.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forChild([
      {path:"country/:name/:value",component:AllCountryComponent},
      {path:"name/:id",component:SingleCountryComponent}
    ])
  ],
  declarations: [AllCountryComponent, SingleCountryComponent  ]
})
export class CountryModule { }
