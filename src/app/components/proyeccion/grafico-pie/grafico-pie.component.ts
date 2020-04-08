import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { AgeticApiService } from '../../../services/agetic-data';
import { getLocaleDateFormat } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grafico-pie',
  templateUrl: './grafico-pie.component.html',
  styleUrls: ['./grafico-pie.component.css']
})
export class GraficoPieComponent implements OnInit {

  porcentaje;
  total;
  arrayDatosGlobales: any[] = [];

  constructor(public _agetic:AgeticApiService) { }

  async ngOnInit() {
    await this.getData();
  }

async getData()
{
  await this._agetic.getData()
                    .subscribe(data => {
                    this.porcentaje = data.porcentaje;
                    this.total = data.total;

                    this.porcentaje = Object.entries(this.porcentaje).map((e) => ({[e[0]='el'] : e[1]}));
                    
                    this.porcentaje.forEach(element => {
                      this.arrayDatosGlobales.push(element.el);
                    });
                  });
}

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Confirmados'], ['Decesos'], 'Recuperados', 'Sospechosos', 'Descartados'];
  public pieChartData: number[] = this.arrayDatosGlobales;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  //public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', '#F1F2F4', 'rgba(0,255,0,0.3)', 'rgba(0,255,0,0.3)', '#2DBFE2'],
    },
  ];


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  }
