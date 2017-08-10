import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {

  @Output() gameStartedEvent = new EventEmitter<number>();

  timer: any;
  counter: number = 0;
  customObservable: Subscription;
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

    const myObservable = Observable.create( ( observer: Observer<string>) => {
      setTimeout( () => {
       observer.next('1st Data Packet!');
      }, 2000);
      setTimeout( () => {
        observer.next('2nd Data Packet!');
      }, 4000);
      // setTimeout( () => {
      //   observer.error('Error Occured!');
      // }, 5000);
      setTimeout( () => {
        observer.complete();
      }, 5000);
      setTimeout( () => {
        observer.next('3rd Data Packet!');
      }, 6000);

    });

    this.customObservable = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('Completed'); }
    );
  }

  ngOnDestroy() {
    this.customObservable.unsubscribe();
  }

}
