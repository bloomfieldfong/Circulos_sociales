import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { map } from "rxjs/operators"
import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
export interface profile{
  name: string
  clase: string[]
  carrera: string
  id: string
}

@Injectable({
  providedIn: 'root'
})



export class PerfilService {
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

  getProfile(){
    this.db.collection("user")
    return this.db.collection("user").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const data = a.payload.doc.data() as profile;
        data.id = a.payload.doc.id;

        if (data.id == this.currentUserId){
          console.log("ya regrese")
          return data
        }else{
          return 0 
        }


      })
    }))
  }
}
