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
    public CuestionarioService: CuestionarioService
  ) { }

  ngOnInit() {
  }
  public enviado = false;
  public titulo: string;
  public Recomendacion: string;
  private todoBien = true;
  onSaveCuestionario(cuestionarioForm: NgForm): void {
    let calCuestionario = cuestionarioForm.value;

    if (cuestionarioForm.value.tos === -1 || cuestionarioForm.value.escalofrios === -1 || cuestionarioForm.value.diarrea === -1) {
      this.Recomendacion = "Datos incompletos";
      this.todoBien = false;
    }
    if (cuestionarioForm.value.dolorGeneral === -1 || cuestionarioForm.value.cabeza === -1 || cuestionarioForm.value.fiebre === -1) {
      this.Recomendacion = "Datos incompletos";
      this.todoBien = false;
    }
    if (cuestionarioForm.value.respirar === -1 || cuestionarioForm.value.fatiga === -1 || cuestionarioForm.value.viajo === -1) {
      this.Recomendacion = "Datos incompletos";
      this.todoBien = false;
    }
    if (cuestionarioForm.value.estado === -1 || cuestionarioForm.value.contacto === -1) {
      this.Recomendacion = "Datos incompletos";
      this.todoBien = false;
    }
    if (cuestionarioForm.value.departamento === "") {
      this.Recomendacion = "Datos incompletos";
      this.todoBien = false;
    }
    console.log(this.todoBien);
    if (this.todoBien == true) {
      this.titulo = "El resultado es: ";
      this.onCalculo(calCuestionario);
      if (cuestionarioForm.value.id == null) {
        this.CuestionarioService.addCuestionario(cuestionarioForm.value);
      }
      this.enviado = true;
      console.log(cuestionarioForm.value);
      cuestionarioForm.resetForm();
      cuestionarioForm.value.tos = -1;

    } else {
      this.titulo = "";
      this.res=0;
    }
    this.todoBien = true;
  }

  public res = 0;

  onCalculo(cuestionario) {
    this.res =
      parseInt(cuestionario.tos) +
      parseInt(cuestionario.escalofrios) +
      parseInt(cuestionario.diarrea) +
      parseInt(cuestionario.garganta) +
      parseInt(cuestionario.dolorGeneral) +
      parseInt(cuestionario.cabeza) +
      parseInt(cuestionario.fiebre) +
      parseInt(cuestionario.olfato) +
      parseInt(cuestionario.respirar) +
      parseInt(cuestionario.fatiga) +
      parseInt(cuestionario.viajo) +
      parseInt(cuestionario.estado) +
      parseInt(cuestionario.contacto)
      ;
    this.enviado = false;
    if (this.res >= 0 && this.res < 3) {
      this.Recomendacion = "PODRIA SER ESTRES, TOME PRECAUCIONES Y ESPPERE";
    }
    if (this.res >= 3 && this.res <= 5) {
      this.Recomendacion = "HIDRATESE, CONSERVE LAS MEDIDAS DE HIGIENE, OBSERVE Y REVALUE EN 2 DIAS";
    }
    if (this.res >= 6 && this.res <= 11) {
      this.Recomendacion = "ACUDA AL MEDICO";
    }
    if (this.res > 12) {
      this.Recomendacion = "LLAME AL 800 10 1104 O AL 800 10 1106 PARA REALIZAR LA DETECCION DE COVID-19";
    }

  }
}
