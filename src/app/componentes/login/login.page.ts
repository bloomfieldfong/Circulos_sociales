import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  
  showPassword  = false;
  passwordToggleIcon = 'eye';

  constructor(private auth: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.auth.login(this.email, this.password).then(res => {
      this.router.navigate(["/home"])
    }).catch(err => 
      this.presentAlert()
      )


  }

  move(){
    this.router.navigate(["/registro"])
  }

  togglePassword():void{
    this.showPassword = !this.showPassword
    if (this.passwordToggleIcon == "eye"){
      this.passwordToggleIcon = 'eye-off'
    }else{
      this.passwordToggleIcon = 'eye'
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos invalidos',
      message: 'La contraseña o usuario son incorrectos',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}



