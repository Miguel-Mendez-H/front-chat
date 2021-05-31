import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  @Input() socket;
  inputchat;
  messages=[];
  logged=false;

  constructor() { }

  ngOnInit(){
    this.socketListened()
  }


  socketListened(){
    this.socket.on('notify', (noti)=>{
      this.logged = true;
      this.messages.push(noti) //push a messages para inicar en html ngFor
    })
    this.socket.on('broadcast',(...data) =>{ //...arreglo de todos los valores
      console.log(data)
      const message = data[0] +':'+data[1]
      this.messages.push(message)
      console.log(message)
    })
    this.socket.on('logout', (data) =>{
      const logout = data
      this.messages.push(data)
      console.log(data)
    })

  }

  sendMessage(){
    const messageChat = this.inputchat
    console.log(messageChat)
    this.socket.emit('sendMessage', messageChat)
  }

}
