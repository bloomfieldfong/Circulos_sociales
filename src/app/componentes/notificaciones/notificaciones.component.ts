import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { NavParams, ModalController } from "@ionic/angular";
import {UsuariosService} from "../../servicios/usuarios.service"
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss'],
})
export class NotificacionesComponent implements OnInit {
  public not : any = []
  public res: any = []
  public algo: any;
  public nuevas: any = []
  constructor(private navParam: NavParams, private modal: ModalController,public usuariosService: UsuariosService) { }

  ngOnInit() {
    this.nuevas =this.navParam.get('notificaciones')
    console.log(this.nuevas)

  }

  async hola(){
    let nuevas: any;
    let parame = this.navParam.get('notificaciones')
    for(let hola of parame){
      this.usuariosService.getName(hola.eme).subscribe(x => {
        this.res = x
        console.log(this.res)
      
      for (let m of this.res){

        if (m!= 0){
          console.log("E")
          this.algo = m
        }else{
          this.algo = hola.eme
        }

      }})
      hola.eme = parame.algo
      
      nuevas.push(hola)
      console.log(nuevas)
    }
    return nuevas

  }
  
  closeChat(){
    this.modal.dismiss()
  }

}
