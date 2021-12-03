import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { IRatingUnit } from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {
  @Input() max = 10;
  @Input() ratingValue = 1;
  @Input() showRatingValue = true;

  @Output() rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];

  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in  changes) {
      let max = changes.max.currentValue;
      max = (typeof max === 'undefined') ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }
  calculate(max: number, ratingValue: number) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }
  constructor() { }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }
  select(index: number): void {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }

  enter(index: number): void {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  reset(): void {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
}
