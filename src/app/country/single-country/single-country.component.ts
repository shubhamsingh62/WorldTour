import { Component, OnInit, animate } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
       public singleData;
       public curr;


  constructor(private _http:AppService, private route:ActivatedRoute,public _loc:Location ) {
    
   }

  

  ngOnInit() {
    
      let id= this.route.snapshot.paramMap.get('id');
      //console.log(id);

      this._http.singleCountry(id).subscribe(
        data=>{
          setTimeout(()=>{
               this.singleData=data;
               
        
          }, 1500)
        },
        error=>{
          console.log("some error occured");
          console.log(error.errorMessage);
        }

  
      )


  }
  scrollTo(element){
    let el=document.getElementById(element);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  goBack() {
    // window.history.back();
    this._loc.back();
  }


}
