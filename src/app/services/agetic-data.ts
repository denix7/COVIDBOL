import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AgeticApiService {

  constructor(private _http:HttpClient) { }

  getData()
  {
    return this._http.get<any>('https://boliviasegura.gob.bo/wp-content/json/api.php');
  }
}