import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //By html element
  //selector: '[app-servers]',  //By html attribute
  //selector: '.app-servers', //By CSS class
  template: `
    <app-server></app-server>
    <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
