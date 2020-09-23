import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ChatsService, chat } from "../../servicios/chats.service";
import { ModalController} from "@ionic/angular"
import { ChatComponent } from "../chat/chat.component";

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  public chatRooms : any= []
  constructor( private router: Router, public chatservice: ChatsService, private modal: ModalController){}

  ngOnInit() {
    this.chatservice.getChatRoom().subscribe(chats=>{
      this.chatRooms = chats;
      
    })
  }

  OpenChat(chat){
    this.modal.create({
      component :ChatComponent,
      componentProps : {
        nombre: chat.nombre
      }
    }).then((modal)=> modal.present())

  }

  moveHome(){
    this.router.navigate(['/home']);
  }

  moveProfile(){
      this.router.navigate(['/perfil']);
  }

  moveGroup(){
    this.router.navigate(['/grupos']);
  }

  movePerfil(){
    this.router.navigate(['/perfil']);
  }
  

}
