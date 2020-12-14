import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";


export interface perfil{
  name: string
  uid: string
  clase: string[]
  carrera: string,
  interes: string[],
  departament: string
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
        data.uid = a.payload.doc.id;   
          if (data.uid != this.currentUserId){
            return data;
          }
          else{
            return 0
          } 
      })
    }))
  }

   
  getChatRoomE(){
    this.db.collection("user")
    return this.db.collection("user").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const data = a.payload.doc.data() as perfil;
        data.uid = a.payload.doc.id;   
          if (data.uid != this.currentUserId){
            return 0;
          }
          else{
            return data;
          } 
      })
    }))
  }

  getName(userid){
    this.db.collection("user")
    return this.db.collection("user").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const datas = a.payload.doc.data() as perfil;
        datas.uid = a.payload.doc.id;   

          if (String(datas.uid) == String(userid)){
            
            return datas.name;
          }
          else{
            return 0
          } 
      })
    }))
  }

  async getNameIndividual(userid){
    let nombre: any = []
    let quine: string;
    let i: any;
    this.getName(userid).subscribe(nombre => {
      console.log(nombre)
      for (let x of nombre){
        if(x != 0){
          quine = x
        }
  
      }
    })


    return quine
  }

  async res(algo){
    let x: any = []
    for (let y of algo ){
      y.eme = this.getNameIndividual(y.eme)
    }
  }


  
  getNames(){
    this.db.collection("user")
    return this.db.collection("user").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const datas = a.payload.doc.data() as perfil;
        datas.uid = a.payload.doc.id;   
        return datas.uid 
      })
    }))
  }
}
