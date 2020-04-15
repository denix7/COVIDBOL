import { Component, OnInit } from '@angular/core';
import { AgeticApiService } from '../../services/agetic-data';

import { map } from "rxjs/operators";

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  contador;

  confirmadosArray: number[] = [];
  decesosArray: number[] = [];
  recuperadosArray: number[] = [];
  sospechososArray: number[] = [];

  constructor(public _agetic : AgeticApiService) 
  { 
  }

  // ngOnInit() 
  // {
  //   this._agetic.getData()
  //         .subscribe(data => {
  //           this.data = data; 
  //   })
  // }

  async ngOnInit() {
    await this.getData();
  }

  async getData()
  {
    await this._agetic.getData()
                .pipe(
                  map(res => {
                    
                    this.contador = res.contador;
                    this.confirmadosArray.push(this.contador.confirmados);
                    this.decesosArray.push(this.contador.decesos);
                    this.recuperadosArray.push(this.contador.recuperados);
                    this.sospechososArray.push(this.contador.sospechosos);
                    console.log(this.confirmadosArray);
                  })
                )
                .subscribe(() => {
                });
  }
}
