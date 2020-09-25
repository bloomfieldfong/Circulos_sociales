import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }
  
  login(email:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user)
      }).catch(err => rejected(err))
    })
  }

  logout(){
    this.AFauth.signOut().then(() =>{
      this.router.navigate(['./login']);
      
    })
  }

  registro(email: string, password: string, name:string, clase: string[], carrera: string, departamento: string){
    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
        this.db.collection('user').doc(res.user.uid).set({
          name: name,
          uid: res.user.uid,
          clase: clase,
          carrera: carrera,
          departamento: departamento
        })
        resolve(res)
      }).catch(err => reject(err))
    }
  )}
}
