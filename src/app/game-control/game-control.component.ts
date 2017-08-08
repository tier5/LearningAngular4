import {Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStartedEvent = new EventEmitter<number>();

  timer: any;
  counter: number = 0;

  constructor() { }

  startGame() {
    this.timer = setInterval(() => {
      this.gameStartedEvent.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }


  ngOnInit() {
  }

}
