import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  view: boolean = true;
  showView( type: string ) {

    if (type === 'Recipe') {
      this.view = true;
    } else if (type === 'Shopping-List') {
      this.view = false;
    }
  }

}
