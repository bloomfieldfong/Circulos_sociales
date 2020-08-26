import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service"
import { RouteConfigLoadEnd } from '@angular/router';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public email : string
  public password :string
  public name: string
  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    console.log(this.email)
    this.auth.registro(this.email,this.password, this.name ).then(auth=> {
      console.log(auth)
      this.router.navigate(["/login"])
    }).catch(err =>console.log(err))
  }
}
