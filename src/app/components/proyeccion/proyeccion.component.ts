import { Component, OnInit } from '@angular/core';
import { AgeticApiService } from '../../services/agetic-data';


@Component({
  selector: 'app-proyeccion',
  templateUrl: './proyeccion.component.html',
  styleUrls: ['./proyeccion.component.css']
})
export class ProyeccionComponent implements OnInit{
  
  data : any = {};
  confirmados:number;
  infectados:string = "Infectdos";

  constructor(public _agetic:AgeticApiService)
  {

  }

  ngOnInit()
  {
    this._agetic.getData()
                .subscribe(data => {
                  this.data = data;
                })
  }
}
