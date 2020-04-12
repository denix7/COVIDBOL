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
    // this.CuestionarioService.getAllCuestionarios().subscribe(res => console.log(res));
  }

  onSaveCuestionario(cuestionarioForm: NgForm): void {
    if (cuestionarioForm.value.id == null) {
      this.CuestionarioService.addCuestionario(cuestionarioForm.value);
    }
    this.onCalculo(cuestionarioForm.value);

    cuestionarioForm.resetForm();
  }
  public DataCuestionario: {};
  onCalculo(cuestionario: CuestionarioService) {
    this.DataCuestionario = Object.assign({}, cuestionario);
    console.log('this.DataCuestionario', this.DataCuestionario);
  }
  
}
