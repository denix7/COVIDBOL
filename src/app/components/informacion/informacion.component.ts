import { Component, OnInit } from '@angular/core';
import { AgeticApiService } from '../../services/agetic-data';

import { map } from "rxjs/operators";

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  
  fecha : number;

  constructor(public _agetic : AgeticApiService) 
  { 
  }

  ngOnInit() 
  {
    this._agetic.getData()
          .subscribe(data => {
            this.fecha = data.fecha; 
    })
  }
}
