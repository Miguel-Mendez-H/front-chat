import { Component, Input, OnInit } from '@angular/core'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() socket;
  user: string = '';
  room: string = '';
  error: string = '';
  notification: string = '';
  logged=false;


  constructor() { }

  ngOnInit() {
    this.login()
    this.socketlistener()
  }


  login() {
    //two way binding 
    this.socket.emit('login', this.user, this.room)
  }

  socketlistener(){
    this.socket.on('notify', (noti)=>{
      this.logged = true;
    })
    this.socket.on('error', (data) => {
      alert(data)
    })
  }
  



}