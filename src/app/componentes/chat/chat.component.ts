import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public name : string
  public mensajes = ['hola', 'hola'];
  public msg : string
  constructor(private navParam: NavParams, private modal: ModalController) { }

  ngOnInit() {

    this.name = this.navParam.get('nombre')
  }

  closeChat(){
    this.modal.dismiss()
  }

  enviarMsg(){
    this.mensajes.push(this.msg)
    this.msg = ""
  }
}
