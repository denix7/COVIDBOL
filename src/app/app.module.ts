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
    GraficoLineasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    AgeticApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
