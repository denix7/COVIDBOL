import { Component, OnInit } from '@angular/core';
import { CuidadosService } from "../../services/cuidados.service";

@Component({
  selector: 'app-cuidados',
  templateUrl: './cuidados.component.html',
  styleUrls: ['./cuidados.component.css']
})
export class CuidadosComponent implements OnInit {
  
  consejos;

  constructor(private _consejos: CuidadosService) { }

  ngOnInit() {
    this._consejos.getCuidados()
                  .subscribe(consejos => {
                  console.log("consejos", consejos);
                  this.consejos = consejos;
    })
  }
}
