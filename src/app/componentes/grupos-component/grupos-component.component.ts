import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NavParams, ModalController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { UsuariosService } from "../../servicios/usuarios.service";
import {ChatsService, chat} from "../../servicios/chats.service"
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-grupos-component',
  templateUrl: './grupos-component.component.html',
  styleUrls: ['./grupos-component.component.scss'],
})
export class GruposComponentComponent implements OnInit {
 
  public profiles: any;
  public hello: any;
  public quienes: any=[];
  public usados: any=[];
  public yes:any=[];
  public nueva:any= [];
  public nombre_chat: string;
  public uid: any;
  public quienes_2: any = [];
  constructor(private router: Router,public alertController: AlertController, private navParam: NavParams, private modal: ModalController, public usuariosService: UsuariosService, public chatService: ChatsService) { }

  ngOnInit() {

    this.profiles = this.navParam.get('perfiles')
    
    console.log(this.profiles)
    this.uid = this.navParam.get('uid')
    for (let x of this.profiles){
      this.yes.push([0,x.uid])
      this.nueva.push(0)
    }

    this.quienes.push(this.navParam.get('uid'))
  }

  update(perfiles){
    this.nueva = []
    let s = 0;
    for (let y of this.yes){
      s +=1
      for (let z of perfiles){
        if (z.uid == y[1]){
          this.nueva.push(y[0])

        }
      }
      
    }

  }


  create_group(){

    let chat_id  = new Date().getTime().toString()
    this.chatService.create_chat_group(this.nombre_chat, this.quienes, chat_id)
    let not_id = new Date().getTime().toString()
    this.chatService.create_notificacion("Se creo un grupo llamado: ",this.nombre_chat, this.quienes_2, not_id)
    this.router.navigate(['/mensajes']);
    
    this.modal.dismiss()
  }

  closeChat(){
    this.modal.dismiss()
  }

  HacerAlgo(perfil){
    let i = 0;
    let xs = 0;
    for (let hola of this.profiles){
      i+=1;
      if (hola == perfil){
        this.usados.push(perfil)
        this.quienes.push(perfil.uid)
        this.quienes_2.push(perfil.uid)
        this.nueva[i-1] = 1
      }
    }
    for(let es of this.yes){
      xs +=1
      if(es[1] == perfil.uid){
        this.yes[xs-1][0] = 1
      }
    }
  }


  async ayuda() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Grupo creado',
      message: 'Se creo el grupo correctamente, ir a mensajes para encontrar el grupo',
      buttons: ['OK']
    });

    await alert.present();
    this.modal.dismiss()
  }

  async filterList(event){
    this.profiles = []
    const events = event.srcElement.value.toLowerCase();
    this.usuariosService.getChatRoom().subscribe(usuarios =>{
      this.profiles = usuarios;
      let nuev_chat: any =[]
      for (let ss of usuarios){
        let i = 0;
        if (ss != 0){
          for (let yy of ss.clase){
            for (let vv of ss.interes){
                if (ss.name.toString().toLowerCase().includes(events.toString())||ss.carrera.toString().toLowerCase().includes(events.toString())|| yy.toString().toLowerCase().includes(events.toString()) ||  vv.toString().toLowerCase().includes(events.toString())){
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
      this.update(this.profiles)
    })
    if (events == ""){
      this.ngOnInit()
      this.update(this.profiles)
    }
  }
}
