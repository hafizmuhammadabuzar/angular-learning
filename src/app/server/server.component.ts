import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: `./server.component.html`,
})
export class ServerComponent implements OnInit {
  serverName: string;
  isEdit = false;
  servers = ['Test Server 1', 'Test Server 2', 'Test Server 3'];

  constructor() { }

  ngOnInit() {
  }

  addServer() {
    this.servers.push(this.serverName);
  }

  removeServer(index: any) {
    this.servers.splice(index, 1);
  }

  editServer(index: any) {
    // console.log(this.servers[index]);
    this.isEdit = true;
    this.serverName = this.servers[index];
  }


}
