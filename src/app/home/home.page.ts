import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { UsuariosService } from "../servicios/usuarios.service";
import { ModalController} from "@ionic/angular"
import {UsuariosComponent} from '../componentes/usuarios/usuarios.component'
import {GruposComponentComponent} from '../componentes/grupos-component/grupos-component.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profiles : any;
  constructor(public authService: AuthService, private router: Router, public usuariosService: UsuariosService, private modal: ModalController){}

  ngOnInit() {
    this.usuariosService.getChatRoom().subscribe(usuarios =>{
      this.profiles = usuarios;
      let nuev_chat: any =[]

      for (let ss of usuarios){
        if (ss != 0){
          nuev_chat.push(ss)
        }
      }
      console.log(nuev_chat)
      this.profiles = nuev_chat;
    })
  }

  async filterList(event){
    this.profiles = []
    const events = event.srcElement.value.toLowerCase() ;
    this.usuariosService.getChatRoom().subscribe(usuarios =>{
      this.profiles = usuarios;
      let nuev_chat: any =[]
      for (let ss of usuarios){
        let i = 0;
        if (ss != 0){
          for (let yy of ss.clase){
            for (let vv of ss.interes){
              console.log(ss.carrera)
              if (ss.carrera.toString().toLowerCase().includes(events.toString())|| yy.toString().toLowerCase().includes(events.toString()) ||  vv.toString().toLowerCase().includes(events.toString())){
                i+=1
            }
            }
          }
          if (i >0){
            nuev_chat.push(ss)
          }
        }
      }
      this.profiles = nuev_chat
    })
    if (events == ""){
      this.ngOnInit()
    }
    
  }

  OpenProfile(usario){
    this.modal.create({
      component :UsuariosComponent,
      componentProps : {
        name: usario.name,
        uid : usario.uid,
        carrera : usario.carrera,
        clases : usario.clase,
      }
    }).then((modal)=> modal.present())

  }


  OpenGroup(profiles){
    this.modal.create({
      component :GruposComponentComponent,
      componentProps : {
        perfiles: profiles,
        uid: this.usuariosService.currentUserId
      }
    }).then((modal)=> modal.present())

  }
  moveGroup(){
    this.router.navigate(['/grupos']);
  }

  moveProfile(){
      this.router.navigate(['/perfil']);
  }

  moveMensajes(){
    this.router.navigate(['/mensajes']);
  }

  movePerfil(){
    this.router.navigate(['/perfil']);
  }
  


}
