import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Adquirido } from '../../interfaces/Adquirido';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdquiridoService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Adquirido/';

  constructor(private http : HttpClient) { }

  getAdquiridos(): Observable<Adquirido[]> {
    return this.http.get<Adquirido[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getAdquirido(id: number): Observable<Adquirido>{
    return this.http.get<Adquirido>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addAdquirido(adquiridos : Adquirido): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, adquiridos);
  }

  eliminarAdquirido(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarAdquirido(adquiridos : Adquirido): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${adquiridos.id}`, adquiridos);
  }
}
