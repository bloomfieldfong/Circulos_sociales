import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { UsuariosService } from "../servicios/usuarios.service";
import { ModalController } from "@ionic/angular"
import { UsuariosComponent } from '../componentes/usuarios/usuarios.component'
import { GruposComponentComponent } from '../componentes/grupos-component/grupos-component.component'
import { AlertController } from '@ionic/angular';
import { ChatsService } from '../servicios/chats.service'
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { NotificacionesComponent } from "../componentes/notificaciones/notificaciones.component"
import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormat'
  })
  export class DateFormatPipe extends DatePipe implements PipeTransform {
    transform(value: any, format: any): any {
       return super.transform(value, format);
    }
  }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private quienes: any;
  public profiles: any;
  public quien: string;
  authState: any = null;
  public notifi: any = [];
  public pes: any = [];
  constructor(public alertController: AlertController, private db: AngularFirestore, private firebaseAuth: AngularFireAuth, public authService: AuthService, private router: Router, public usuariosService: UsuariosService, private modal: ModalController, public chatService: ChatsService) {
    this.firebaseAuth.authState.subscribe(authState => {
      this.authState = authState;
    });
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : null;
  }

  ngOnInit() {

    this.usuariosService.getChatRoom().subscribe(usuarios => {
      this.profiles = usuarios;
      let nuev_chat: any = []
      for (let ss of usuarios) {
        if (ss != 0) {
          nuev_chat.push(ss)
        }
      }
      this.profiles = nuev_chat;
    })

    this.usuariosService.getChatRoomE().subscribe(usuarios => {
      console.log(usuarios)
      this.pes = usuarios;
      let nuev_chat: any = []
      for (let ss of usuarios) {
        if (ss != 0) {
          nuev_chat.push(ss)
        }
      }
      this.pes = nuev_chat;
      console.log(this.pes)
      let hola: any
      hola = this.pes[0]
      console.log(hola)
      this.pes = hola.name
      console.log(this.pes)

    })
    

    this.usuariosService.getNames().subscribe(a => {
      this.quienes = a
      this.RemoveElementFromArray(this.currentUserId)
    })

    this.chatService.getNotificacion().subscribe(noti => {
      let u = []
      for (let x of noti) {
        if (x.quienes.includes(this.currentUserId)) {
          u.push(x)
        }
      }
      this.notifi = u
    })


  }


  RemoveElementFromArray(element: any) {
    this.quienes.forEach((value, index) => {
      if (value == element) this.quienes.splice(index, 1);
    });
  }



  async filterList(event) {
    this.profiles = []
    const events = event.srcElement.value.toLowerCase();
    this.usuariosService.getChatRoom().subscribe(usuarios => {
      this.profiles = usuarios;
      let nuev_chat: any = []
      for (let ss of usuarios) {
        let i = 0;
        if (ss != 0) {
          for (let yy of ss.clase) {
            for (let vv of ss.interes) {
              if (ss.departament.toString().toLowerCase().includes(events.toString()) || ss.name.toString().toLowerCase().includes(events.toString()) || ss.carrera.toString().toLowerCase().includes(events.toString()) || yy.toString().toLowerCase().includes(events.toString()) || vv.toString().toLowerCase().includes(events.toString())) {
                i += 1
              }
            }
          }
          if (i > 0) {
            nuev_chat.push(ss)
          }
        }
      }
      this.profiles = nuev_chat
    })
    if (events == "") {
      this.ngOnInit()
    }

  }

  OpenProfile(usario) {
    this.modal.create({
      component: UsuariosComponent,
      componentProps: {
        name: usario.name,
        uid: usario.uid,
        carrera: usario.carrera,
        clases: usario.clase,
        intereses: usario.interes,
        departament: usario.departament
      }
    }).then((modal) => modal.present())

  }

  async ayuda() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Boton de Ayuda',
      message: 'Este boton es solo para uso de emergencia, esta seguro de que necesita ayuda?',
      buttons: [
        {
          text: 'OK',
          handler: (blah) => {
            let not_id = new Date().toString()
            console.log(this.quien)

            this.chatService.create_notificacion("EMERGENCIA!! tu compañero te necesita contactate con:", this.pes, this.quienes, not_id)

          }
        },
        'Cancel'
      ]
    });

    await alert.present();
  }

  ayudar() {
    this.ayuda()
  }

  noti() {
    this.modal.create({
      component: NotificacionesComponent,
      componentProps: {
        notificaciones: this.notifi
      }
    }).then((modal) => modal.present())

  }

  OpenGroup(profiles) {
    this.modal.create({
      component: GruposComponentComponent,
      componentProps: {
        perfiles: profiles,
        uid: this.usuariosService.currentUserId
      }
    }).then((modal) => modal.present())

  }
  moveGroup() {
    this.router.navigate(['/grupos']);
  }

  moveProfile() {
    this.router.navigate(['/perfil']);
  }

  moveMensajes() {
    this.router.navigate(['/mensajes']);
  }

  movePerfil() {
    this.router.navigate(['/perfil']);
  }



}
