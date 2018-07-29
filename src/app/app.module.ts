import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountryModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"**",component:HomeComponent}
    ])

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
