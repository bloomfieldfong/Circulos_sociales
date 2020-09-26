import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { UsuariosService } from "../servicios/usuarios.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public profiles : any= []
  constructor(public authService: AuthService, private router: Router, public usuariosService: UsuariosService){}
  
  Onlogout(){
    console.log("hola")
    this.authService.logout();
  }

  ngOnInit() {

    this.usuariosService.getChatRoom().subscribe(usuarios =>{
      this.profiles = usuarios;

      console.log(usuarios)
      console.log("s")
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
