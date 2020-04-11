import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CuidadosComponent } from './components/cuidados/cuidados.component';
import { ProyeccionComponent } from './components/proyeccion/proyeccion.component';

import { ChartsModule } from 'ng2-charts';
import { GraficoBarrasComponent } from './components/proyeccion/grafico-barras/grafico-barras.component';
import { GraficoLineasComponent } from './components/proyeccion/grafico-lineas/grafico-lineas.component';

import { HttpClientModule } from "@angular/common/http";

//services
import { AgeticApiService } from "./services/agetic-data";
import { GraficoBarrasDepartamentosComponent } from './components/proyeccion/grafico-barras-departamentos/grafico-barras-departamentos.component';
import { GraficoPieComponent } from './components/proyeccion/grafico-pie/grafico-pie.component';
import { ChatModule } from './chat/chat.module';

//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import {CuestionarioService} from './services/cuestionario.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    InformacionComponent,
    CuidadosComponent,
    ProyeccionComponent,
    GraficoBarrasComponent,
    GraficoLineasComponent,
    GraficoBarrasDepartamentosComponent,
    GraficoPieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ChatModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase)
  ],
  providers: [
    AgeticApiService,
    CuestionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
