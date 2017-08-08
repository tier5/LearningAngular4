import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  @Output() viewEmitter = new EventEmitter<string>();

  activeType: string = 'Recipe';
  constructor() {}

  showContent( type: string) {
    this.activeType = type;
    this.viewEmitter.emit(type);
  }
}
