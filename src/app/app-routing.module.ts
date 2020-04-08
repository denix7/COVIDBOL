import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProyeccionComponent } from './components/proyeccion/proyeccion.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CuidadosComponent } from './components/cuidados/cuidados.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'proyeccion',
        component: ProyeccionComponent
    },
    {
        path: 'informacion',
        component: InformacionComponent
    },
    {
        path: 'cuidados',
        component: CuidadosComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}