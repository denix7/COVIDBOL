import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { AgeticApiService } from '../../../services/agetic-data';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-grafico-barras-departamentos',
  templateUrl: './grafico-barras-departamentos.component.html',
  styleUrls: ['./grafico-barras-departamentos.component.css']
})
export class GraficoBarrasDepartamentosComponent implements OnInit {
  departamentos;

  confirmadosArray: number[] = [];
  decesosArray: number[] = [];
  recuperadosArray: number[] = [];
  sospechososArray: number[] = [];
  
  constructor(public _agetic:AgeticApiService) { 
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

                    //parse object of objects in to array
                    arrayOfDepa = Object.entries(this.departamentos).map((e) => ({[e[0]="depa"]:e[1]}))

                    arrayOfDepa.forEach(element => {
                        this.confirmadosArray.push(element.depa.contador.confirmados);
                        this.decesosArray.push(element.depa.contador.decesos);
                        this.recuperadosArray.push(element.depa.contador.recuperados);
                        this.sospechososArray.push(element.depa.contador.sospechosos);
                      })
                  })
                )
                .subscribe(() => {
                });
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['La Paz', 'Cochabamba', 'Santa Cruz', 'Oruro', 'Potosi', 'Tarija', 'Chuquisaca', 'Beni', 'Pando'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: this.confirmadosArray, label: 'Infectados' },
    { data: this.decesosArray, label: 'Bajas' },
    { data: this.recuperadosArray, label: 'Recuperados' },
    { data: this.sospechososArray, label: 'Sospechosos' }
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
