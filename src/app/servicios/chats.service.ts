import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { HomePage } from '../home/home.page';
import { UsuariosService } from "../servicios/usuarios.service";
import {mensaje} from "../modelos/mensaje"
import { firestore } from 'firebase';
export interface chat{
  nombre: any
  id: string
  img: string
  users: string[]
  mensaje: string[]
}

export interface perfil{
  name: string
  uid: string

}
@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  authState: any = null;
  public done: boolean;
  constructor(private db: AngularFirestore, private firebaseAuth: AngularFireAuth, public usuariosService: UsuariosService) {
    this.firebaseAuth.authState.subscribe( authState => {
      this.authState = authState;
    });

   }

  get isAuthenticated(): boolean {
      return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : null;
  }

getChatRoom(){
    this.db.collection("chat")
    return this.db.collection("chat").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;   
        var i = 0;
        for (let user of data.users){
          if (user == this.currentUserId){
            i+=1;
          }
        }
        if (data.nombre == '' && data.users.length == 2){

          for(let user of data.users){
            if(user != this.currentUserId){

              this.done = true;
              this.usuariosService.getName(user).subscribe(usuarios =>{
                for(let x of usuarios){
                    if (x!= '0'){
                      data.nombre  = x;
                    }
                }
              })

            }
          }
        }
        if (i>=1){
          return data;
        }
        else{
          return 0;
        }

      })
    }))
  }

  
sendMsgToFiresabe(mensaje: mensaje, chatid: string){
    this.db.collection("chat").doc(chatid).update({
      mensaje: firestore.FieldValue.arrayUnion(mensaje),
    })
  }
  

create_chat(image: string, users: any, id: string){
    this.db.collection("chat").doc(id).set({
      id: id,
      img: image,
      users: users,
      nombre: ""
    })
  }
  create_chat_group(image: string, users: any, id: string){
    this.db.collection("chat").doc(id).set({
      id: id,
      img: "",
      users: users,
      nombre: image
    })
  }

}

