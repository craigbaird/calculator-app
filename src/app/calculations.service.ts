import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';
import * as request from "request-promise-native";

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  calculations: any;

  constructor(private http: HttpClient) { }

  getCalculations() {
    console.log('in getCalculations');
    // this.http.get('/calculation').subscribe(data => {
    //   console.log('Data in client', data);
    //   this.calculations = data;
    // })
    // (async () => {
    //   const baseUrl = 'www.random.org/integers';
    //   const queryString = '?num=100&min=1&max=100&col=5&base=10&format=html&rnd=new';
    //   var options = {
    //       uri: baseUrl + queryString,
    //   };
    
    //   const result = await request.get(options);
    //   console.log('result', result);
    // })()
  }
}
