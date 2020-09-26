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
  authState: any = null;
  constructor(private db: AngularFirestore, private firebaseAuth: AngularFireAuth) {
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
    this.db.collection("user")
    return this.db.collection("user").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const data = a.payload.doc.data() as perfil;
        data.id = a.payload.doc.id;   
        console.log(data)

        for (let ss of data.name){
          console.log(this.currentUserId)
          console.log(ss)
          if (ss != this.currentUserId){
            return data;
          }
          else{
            return 0
          } 
        }

        return data
      })
    }))
  }
}
