import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  calculations: any;

  constructor(private http: HttpClient) { }

  getCalculations() {
    console.log('in getCalculations');
    this.http.get('calculations').subscribe((data:any) => {
      this.calculations = data;
    }, error => {
        console.log("There was a find error", error);
    });
  }

  saveCalculation(calcToSave) {
    console.log('in saveCalculation');
    let calculation = {calculation: calcToSave}
    this.http.post('calculations', calculation).subscribe((data:any) => {
      console.log('calculation saved');
    }, error => {
      console.log("There was a save error", error);
    });
  }
}
