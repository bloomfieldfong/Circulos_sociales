import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebase } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule} from "@angular/fire/firestore"
import { ChatComponent } from './componentes/chat/chat.component'
import { GruposComponentComponent } from './componentes/grupos-component/grupos-component.component'
import { FormsModule} from "@angular/forms"
import { UsuariosComponent } from "./componentes/usuarios/usuarios.component";
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificacionesComponent} from "./componentes/notificaciones/notificaciones.component"

@NgModule({
  declarations: [AppComponent, ChatComponent, UsuariosComponent,  GruposComponentComponent, NotificacionesComponent],
  entryComponents: [NotificacionesComponent, ChatComponent, GruposComponentComponent],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  AngularFireModule.initializeApp(firebase),
  AngularFireAuthModule, AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
