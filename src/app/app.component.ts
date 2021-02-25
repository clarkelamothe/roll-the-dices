import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rightDice = './assets/img/dice1.svg';
  leftDice = './assets/img/dice5.svg';

  number1: number = 1;
  number2: number = 2;

  rollDices(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;
    this.rightDice = './assets/img/dice' + this.number1 + '.svg';
    this.leftDice = './assets/img/dice' + this.number2 + '.svg';
  }
}
