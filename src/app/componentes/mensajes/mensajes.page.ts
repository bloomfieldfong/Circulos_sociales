import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ChatsService, chat } from "../../servicios/chats.service";
import { ModalController} from "@ionic/angular"
import { ChatComponent } from "../chat/chat.component";
import { PerfilService } from "../../servicios/perfil.service";

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  public chatRooms : any= []
  public who: string;
  public who_name: string;
  public profile: any = []

  constructor( private router: Router, public chatservice: ChatsService, private modal: ModalController, public perfilService: PerfilService){}

  ngOnInit() {

    this.perfilService.getProfile().subscribe(perfiles=>{
      this.profile = perfiles
      for (let ss of perfiles){
        if (ss != 0){
          this.profile = ss
          this.who = ss.id
          this.who_name = ss.name
          console.log(this.who)
          console.log(this.who_name)
          console.log(ss)
        }
      }
    })

    this.chatservice.getChatRoom().subscribe(chats=>{
      console.log(chats)
      console.log("s")
      let nuev_chat: any =[]
      for (let ss of chats){
        if (ss != 0){
          nuev_chat.push(ss)
        }
      }
      console.log(nuev_chat)
      this.chatRooms = nuev_chat;
    })
  }

  OpenChat(chat){
    this.modal.create({
      component :ChatComponent,
      componentProps : {
        nombre: chat.nombre,
        id: chat.id,
        who: this.who,
        who_name: this.who_name
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
