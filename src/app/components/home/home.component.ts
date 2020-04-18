import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { CuestionarioI } from '../../../model/cuestionario.interface';
import { CuestionarioService, CuestionarioID } from '../../services/cuestionario.service';
import { NgForm } from '@angular/forms';

import { ModalComponent } from '../modal/modal.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private CuestionarioService: CuestionarioService
  ) { }

  ngOnInit() {
  }
  public enviado = false;

  onSaveCuestionario(cuestionarioForm: NgForm): void {
    if (cuestionarioForm.value.id == null) {
      this.CuestionarioService.addCuestionario(cuestionarioForm.value);
    }
    this.onCalculo();
    this.enviado = true;
    cuestionarioForm.resetForm();
    // this.enviado=false;
  }
  public resultado: number = 0;

  onCalculo() {
    this.resultado = 111111;
    console.log(this.resultado);
  }


}
