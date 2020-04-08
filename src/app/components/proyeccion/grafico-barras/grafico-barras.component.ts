import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AgeticApiService } from '../../../services/agetic-data';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {
  contador;

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
                    this.contador = res.contador;
                    this.confirmadosArray.push(this.contador.confirmados);
                    this.decesosArray.push(this.contador.decesos);
                    this.recuperadosArray.push(this.contador.recuperados);
                    this.sospechososArray.push(this.contador.sospechosos);
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

  public barChartLabels: Label[] = ['Total Bolivia'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: this.confirmadosArray, label: 'Infectados' },
    { data: this.recuperadosArray, label: 'Recuperados' },
    { data: this.decesosArray, label: 'Bajas' },
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