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
    tos: -1,
    escalofrios: -1,
    diarrea: -1,
    garganta: -1,
    dolorGeneral: -1,
    cabeza: -1,
    fiebre: -1,
    olfato: -1,
    respirar: -1,
    fatiga: -1,
    viajo: -1,
    estado: -1,
    contacto: -1,
    departamento: '',
    resultado: -1
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
