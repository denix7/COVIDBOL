import { Component, OnInit } from '@angular/core';
import { AgeticApiService } from '../../../services/agetic-data';

import { map } from "rxjs/operators";

@Component({
  selector: 'app-informacion-departamentos',
  templateUrl: './informacion-departamentos.component.html',
  styleUrls: ['./informacion-departamentos.component.css']
})
export class InformacionDepartamentosComponent implements OnInit {
  
  departamentos;
  nombreDepartamentos : any[] = [];
  confirmadosArray: number[] = [];
  decesosArray: number[] = [];
  recuperadosArray: number[] = [];
  sospechososArray: number[] = [];

  constructor(public _agetic : AgeticApiService) {
    this.nombreDepartamentos = ['La Paz', 'Cochabamba', 'Santa Cruz', 'Oruro', 'Potosi', 'Tarija', 'Chuquisaca', 'Beni', 'Pando'];
  }

  async ngOnInit() {
    await this.getData();
  }

  async getData()
  {
    await this._agetic.getData()
                .pipe(
                  map(res => {
                    this.departamentos = res.departamento;

                    var arrayOfDepa = [];
                    arrayOfDepa = Object.entries(this.departamentos).map((e) => ({[e[0]="depa"]:e[1]}))

                    arrayOfDepa.forEach(element => {
                        this.confirmadosArray.push(element.depa.contador.confirmados);
                        this.decesosArray.push(element.depa.contador.decesos);
                        this.recuperadosArray.push(element.depa.contador.recuperados);
                        this.sospechososArray.push(element.depa.contador.sospechosos);
                      })
                      console.log(arrayOfDepa);
                  })
                )
                .subscribe(() => {
                });
  }
}
