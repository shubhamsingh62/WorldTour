import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppService } from '../../app.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Format } from '../format';
import { Location } from '@angular/common';


@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit, OnDestroy {

  public Allreigon: Format[];
  public region;
  public regionImg;
  constructor(private spinnerService: Ng4LoadingSpinnerService, private _http: AppService, private _router: ActivatedRoute, public _loc: Location) {

  }

  ngOnInit() {


    this._router.params.subscribe(param => {
      this.spinnerService.show();
      this.Allreigon = []

      let name = this._router.snapshot.paramMap.get('name');
    //  console.log(name);
      let data = this._router.snapshot.paramMap.get('value');
     // console.log(data);


      this.getallCountry(name, data);


    });
  }
  public getallCountry = (name: string, data: string): any => {
    //console.log('getall country called');
    this._http.regionalCountries(name, data).subscribe(
      data => {
        setTimeout(() => {
          this.Allreigon = data;

          this.spinnerService.hide();
        }, 1500)
      },
      error => {
        console.log(error.errorMessage);
      })

    if (data == 'americas' || data == 'oceania' || data == 'asia' || data == 'africa' || data == 'europe') {
      this.region = data;
    }
    else if (name == 'currency') {
      this.region = name;
    }
    else if (name == 'lang') {
      this.region = name;

    }

  }

  ngOnDestroy() {

  }

  goBack() {
    // window.history.back();
    this._loc.back();
  }
}
