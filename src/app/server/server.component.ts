import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  ServerID: number = 10;
  ServerStatus: string = 'offline';
}
