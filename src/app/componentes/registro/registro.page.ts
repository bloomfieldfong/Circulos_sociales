import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service"
import { RouteConfigLoadEnd } from '@angular/router';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})



export class RegistroPage implements OnInit {
  public email : string
  public password :string
  public name: string
  public clase: string[]
  public carrera: string
  constructor(private auth: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    console.log(this.email)
    this.auth.registro(this.email,this.password, this.name, this.clase, this.carrera).then(auth=> {
      console.log(auth)
      this.presentAlert()
      this.router.navigate(["/login"])
    }).catch(err =>console.log(err))
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro Invalido',
      message: 'Se ha registrado correctamente',
      buttons: ['OK']
    });

    await alert.present();
  }
}
