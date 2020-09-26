import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";


export interface perfil{
  name: string
  id: string
  clase: string[]
  carrera: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private db: AngularFirestore, private firebaseAuth: AngularFireAuth) {}
  getChatRoom(){
    this.db.collection("user")
    return this.db.collection("user").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const data = a.payload.doc.data() as perfil;
        data.id = a.payload.doc.id;   
        console.log(data)
        return data
      })
    }))
  }
}
