import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs/internal/Observable";

export interface IConsejo{};

@Injectable({
  providedIn: 'root'
})
export class CuidadosService {

  private consejosCollection: AngularFirestoreCollection<IConsejo>;
  private consejos: Observable<IConsejo[]>

  constructor(private afs: AngularFirestore)
  {
    this.consejosCollection = afs.collection<IConsejo>('consejos');
    this.consejos = this.consejosCollection.valueChanges();
  }

  getCuidados()
  {
    return this.consejos;
  }
}
