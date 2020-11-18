import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { ChatsService } from 'src/app/servicios/chats.service';
import { mensaje } from "../../modelos/mensaje";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chat: any;
  public name : string
  public room : any;
  public id : any;
  public msg : string;
  public who: string;
  public who_name: string;

  constructor(private navParam: NavParams, private modal: ModalController, private chatService: ChatsService) { }

  ngOnInit() {


    this.name = this.navParam.get('nombre')
    this.id = this.navParam.get('id')
    this.who = this.navParam.get('who')
    this.who_name = this.navParam.get('who_name')

    this.chatService.getChatRoom().subscribe(room=> {
      console.log(room)
      room.map(a => {
        if (a!=0){
          if(a.id  == this.id){
            this.room = a
          }
        }
      })

    })
    
   
  }

  closeChat(){
    this.modal.dismiss()
  }

enviarMsg(){
    const mensja : mensaje = {
      contenido: this.msg,
      type : 'text',
      date: new Date(),
      who: [this.who, this.who_name]
    }
    console.log(mensja)
    this.chatService.sendMsgToFiresabe(mensja, this.id)
    this.msg = ""
    
  }
}
