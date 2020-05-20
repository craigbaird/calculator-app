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
    this.http.get('/calculation').subscribe(data => {
      console.log('Data in client', data);
      this.calculations = data;
    })
  }
}
