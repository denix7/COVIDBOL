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
import { CuidadosService } from "./services/cuidados.service";

//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import {CuestionarioService} from './services/cuestionario.service';
import { ModalComponent } from './components/modal/modal.component';

import { InformacionDepartamentosComponent } from './components/informacion/informacion-departamentos/informacion-departamentos.component';
import { InformacionGeneralComponent } from './components/informacion/informacion-general/informacion-general.component';
import { ServiceWorkerModule } from '@angular/service-worker';


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
    ModalComponent,
    InformacionDepartamentosComponent,
    InformacionGeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ChatModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   
  ],
  exports:[ModalComponent],
  providers: [
    AgeticApiService,
    CuestionarioService,
    CuidadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
