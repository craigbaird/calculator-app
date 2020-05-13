import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'sezzle-calculator-app';
  runningCalculation = [];
  stringTotal;
  displayValue = 0;

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
    return total;
  }
}
