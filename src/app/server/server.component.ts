import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  //Properties
  serverId: number = 10;
  serverStatus: string = 'offline';
  person = { Name: 'Max' }; //This is an object

  getServerStatus() {
    return this.serverStatus;
  }
}
