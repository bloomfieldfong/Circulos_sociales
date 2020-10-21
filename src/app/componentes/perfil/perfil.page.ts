import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PerfilService } from "../../servicios/perfil.service";
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public profile: any = []
  public clases: any = []
  constructor( private router: Router, public perfilService: PerfilService){}

  ngOnInit() {

    this.perfilService.getProfile().subscribe(perfiles=>{
      this.profile = perfiles
      console.log(perfiles)

      for (let ss of perfiles){
        if (ss != 0){
          this.profile = ss
          this.clases = ss.clase

        }
      }
      console.log(this.profile)
      console.log(this.clases)
    })
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
