import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";

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
  constructor(private navParam: NavParams,private modal: ModalController) { }

  ngOnInit() {
    this.name = this.navParam.get('name')
    this.carrera = this.navParam.get('carrera')
    this.clases = this.navParam.get('clases')
    this.uid = this.navParam.get('uid')
    console.log(this.clases)
  }


  
  closeChat(){
    this.modal.dismiss()
  }

  

}
