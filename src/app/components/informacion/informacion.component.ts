import { Component, OnInit } from '@angular/core';
import { AgeticApiService } from '../../services/agetic-data';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  data : any = {};
  confirmados : number;
  sospechosos : number;
  muertes : number;
  recuperados : number;

  constructor(public _agetic : AgeticApiService) 
  { 

  }

  ngOnInit() 
  {
    this._agetic.getData().subscribe(data => {this.data = data; })
  }

}
