import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { PerfilService } from "../../servicios/perfil.service";
import { ChatComponent } from "../chat/chat.component";
import {ChatsService, chat} from "../../servicios/chats.service"
import { Router } from "@angular/router";
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  public name : string
  public carrera: string
  public clases : any =[]
  public uid: string
  public hisid: string
  public profile: any = []
  public data: any = []
  public i: any;
  public chat: any;
  public interes: any = [];
  public departament: any;
  
  constructor(private router: Router,private navParam: NavParams,private modal: ModalController,public perfilService: PerfilService, public chatService: ChatsService) { }

  ngOnInit() {
    this.i = 0;
    this.perfilService.getProfile().subscribe(perfiles=>{
      this.profile = perfiles
      for (let ss of perfiles){
        if (ss != 0){
          this.profile = ss
          this.hisid = ss.id

        }
      }
    })

    this.name = this.navParam.get('name')
    this.carrera = this.navParam.get('carrera')
    this.clases = this.navParam.get('clases')
    this.uid = this.navParam.get('uid')
    this.hisid = this.navParam.get('hisid')
    this.interes = this.navParam.get('intereses')
    this.departament = this.navParam.get('departament')
    
  }
  OpenChat(chat){
    this.modal.create({
      component :ChatComponent,
      componentProps : {
        nombre: chat.nombre,
        id: chat.id,
        who: this.uid,
        who_name: this.hisid
      }
    }).then((modal)=> modal.present())
  
  }

crear_chat(){
  console.log("R")
  this.chatService.getChatRoom().subscribe(room=> {
    room.map(ro => {
      console.log("e")
      console.log(ro)
      if (ro!= 0){
        console.log(ro.users)
        console.log([this.uid, this.hisid])
        console.log([1,1].toString() == [1,1].toString())
        if(ro.users.toString() == [this.uid, this.hisid].toString() || ro.users.toString() == [this.hisid,this.uid].toString()){
          this.i +=1
          console.log("ya existe el usuario")
          this.chat = ro
        }else{
          console.log("No existe")
        }
      }
    })
  })
  let chat_id  = new Date().getTime().toString()
  if (this.i == 0){
    "Se creo el usuario correctamente"
    this.chatService.create_chat("", [this.uid, this.hisid], chat_id)
  }
  this.modal.dismiss()
  this.router.navigate(['/mensajes']);


}


  
  closeChat(){
    this.modal.dismiss()
  }

  

}
