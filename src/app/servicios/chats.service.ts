import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

export interface chat{
  nombre: string
  id: string
  img: string
  users: string[]
}
@Injectable({
  providedIn: 'root'
})
export class ChatsService {

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
    this.db.collection("chat")
    return this.db.collection("chat").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {

        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;   
        console.log(data)
        
        for (let ss of data.users){
          console.log(this.currentUserId)
          console.log(ss)
          if (ss == this.currentUserId){
            return data;
          }
          else{
            return 0
          } 
        }

      })
    }))
  }
}
