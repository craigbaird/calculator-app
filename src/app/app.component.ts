import { Component, OnInit, HostListener, Host } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'sezzle-calculator-app';
  runningCalculation = [];
  calculation;
  total;
  displayValue = 0;
  calculations = [];

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.listen('test event').subscribe((data) => {
      console.log('data: ', data);
    })
  }

  buttonClicked(value) {
    if (value === '=') {
      this.equals();
    } else if (value == 'ac') {
      this.allClear();
    } else {
      this.keepCalculating(value);
    }
  }

  equals() {
    let total = this.totalUp();
    this.displayValue = total;
    let timestamp = this.getTimeStamp();
    this.webSocketService.emit('calculation', this.calculation);
    this.calculation = '';
  }

  getTimeStamp() {
    let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth();
      let date = currentDate.getDate();
      let hour = currentDate.getHours();
      let minute = currentDate.getMinutes();
      let second = currentDate.getSeconds();
      let dateString = year + "-" + (month + 1) + "-" + date + '(' + hour + ':' + 
                     minute + ':' + second + ')';
      return dateString;
  }

  allClear() {
    this.runningCalculation = [];
    this.displayValue = 0;
  }

  keepCalculating(value) {
    this.runningCalculation.push(value);
  }

  getPrettyString() {
    let arrayToString = this.runningCalculation.toString();
    let stringWithCommasRemoved = arrayToString.replace(/,/g, '');
    return stringWithCommasRemoved;
  }

  totalUp() {
    let stringToCalculate = this.getPrettyString();
    let total = eval(stringToCalculate);
    this.createFullStringCalculation(stringToCalculate, total);
    return total;
  }

  createFullStringCalculation(calc, total) {
    this.calculation = calc + '=' + total;
    this.calculations.unshift(this.calculation);
    console.log(this.calculations);
  }

}