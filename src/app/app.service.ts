import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ApiFormat } from './api-format';

@Injectable()
export class AppService implements ApiFormat {

  public baseUrl = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) {
    //console.log("app service are called");
  }

  public regionalCountries(name, data): Observable<any> {
    let response = this.http.get(`${this.baseUrl}/${name}/${data}?fields=name;timezone;capital;region;subregion;population;currencies;languages;flag;nativeName`);
    return response;
  }

  public singleCountry(name): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}?fullText=true`)
  }

}
