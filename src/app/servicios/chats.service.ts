import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { AngularFirestore} from "@angular/fire/firestore";

export interface chat{
  nombre: string
  id: string
  img: string
}
@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db: AngularFirestore) { }

  getChatRoom(){
    return this.db.collection("chat").snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a => {
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
}
