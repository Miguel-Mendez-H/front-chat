import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public socket: any;

  ngOnInit() {
    this.createSocket()
  }

  createSocket = () => {
    const SOCKET_ENDPOINT = 'https://back-chat.herokuapp.com/'
    this.socket = io(SOCKET_ENDPOINT)
  }
}

