import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Salidad } from '../../interfaces/Salida';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Salida/';

  constructor(private http : HttpClient) { }

  getSalidas(): Observable<Salidad[]> {
    return this.http.get<Salidad[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getSalida(id: number): Observable<Salidad>{
    return this.http.get<Salidad>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addSalidad(salidas :  Salidad): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, salidas);
  }

  eliminarSalida(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarSalida(salidas :  Salidad): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${salidas.id}`, salidas);
  }
}
