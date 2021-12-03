import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input() seconds = 11;
  constructor() { }

  ngOnDestroy(): void {
    this.clearTimer();
  }
  ngOnInit(): void {
    this.reset();
  }

  clearTimer(): void {
    clearInterval(this.intervalId);
  }
  start(): void {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }
  stop(): void {
    this.clearTimer();
    this.message = `Holding at ${this.remainingTime} seconds`;
  }
  reset(): void {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }
  private countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Happy new year!!!';
        this.clearTimer();
      } else {
        this.message = `${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
