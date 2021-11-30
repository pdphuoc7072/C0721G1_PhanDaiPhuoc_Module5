import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNum: number;
  secondNum: number;
  result: any;
  operator = '+';

  constructor() {
    this.firstNum = 0;
    this.secondNum = 0;
  }

  onFirstChange(event): void {
    this.firstNum = Number(event.target.value);
  }

  onSecondChange(event): void {
    this.secondNum = Number(event.target.value);
  }

  onSelectChange(event): void {
    this.operator = event.target.value;
  }

  calculate(): void {
    if (isNaN(this.firstNum) || isNaN(this.secondNum)) {
      throw new Error('Parameter is not a number!');
    }
    switch (this.operator) {
      case '+':
        this.result = this.firstNum + this.secondNum;
        break;
      case '-':
        this.result = this.firstNum - this.secondNum;
        break;
      case '*':
        this.result = this.firstNum * this.secondNum;
        break;
      case '/':
        if (this.secondNum === 0) {
          this.result = 'Can\'t divide by zero!';
        } else {
          this.result = this.firstNum / this.secondNum;
        }
        break;
      default:
        throw new Error('Not supported yet.');
    }
}

  ngOnInit(): void {
  }

}
