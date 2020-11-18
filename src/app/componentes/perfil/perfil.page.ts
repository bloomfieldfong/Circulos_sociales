import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PerfilService } from "../../servicios/perfil.service";
import { AuthService } from "../../servicios/auth.service";
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public profile: any = []
  public clases: any = []
  constructor(private router: Router, public perfilService: PerfilService, public authService: AuthService){}

  ngOnInit() {
    this.perfilService.getProfile().subscribe(perfiles=>{
      this.profile = perfiles
      for (let ss of perfiles){
        if (ss != 0){
          this.profile = ss
          this.clases = ss.clase
        }
      }
    })
  }
  
  Onlogout(){
    console.log("hola")
    this.authService.logout();
  }
  moveHome(){
    this.router.navigate(['/home']);
  }

  moveProfile(){
      this.router.navigate(['/perfil']);
  }

  moveMensajes(){
    this.router.navigate(['/mensajes']);
  }

  moveGroup(){
    this.router.navigate(['/grupos']);
  }



}
