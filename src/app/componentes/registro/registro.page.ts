import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service"
import { RouteConfigLoadEnd } from '@angular/router';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/auth";

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
  public departamento: string


  constructor(private auth: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    console.log(this.email)
    this.auth.registro(this.email,this.password, this.name, this.clase, this.carrera, this.departamento).then(auth=> {
      console.log(auth)
      this.presentAlert()
      this.router.navigate(["/login"])
    }).catch(err =>{console.log(err)
    this.AlertIncorrect()
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro Completo',
      message: 'Se ha registrado correctamente, gracias por utilizar "nombre app"',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertIncorrect() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'No se pudo registrar',
      message: 'No has llenado todos los campos',
      buttons: ['OK']
    });

    await alert.present();
  }
}
