import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CuestionarioI } from '../../model/cuestionario.interface';

export interface CuestionarioID extends CuestionarioI { id: string; };

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  private cuestionarioCollection: AngularFirestoreCollection<CuestionarioI>;
  cuestionario: Observable<CuestionarioID[]>;
  
  public selected = {
    tos: 0,
    escalofrios: 0,
    diarrea: 0,
    garganta: 0,
    dolorGeneral: 0,
    cabeza: 0,
    fiebre: 0,
    olfato: 0,
    respirar: 0,
    fatiga: 0,
    viajo: 0,
    estado: 0,
    contacto: 0,
    departamento: ''
  }
  constructor(private readonly afs: AngularFirestore) {
    this.cuestionarioCollection = afs.collection<CuestionarioI>('cuestionarios');
    this.cuestionario = this.cuestionarioCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CuestionarioI;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getAllCuestionarios() {
    return this.cuestionario;
  }

  addCuestionario(cuestionario: CuestionarioI) {
    return this.cuestionarioCollection.add(cuestionario);
  }
}
