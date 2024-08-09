import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../../interfaces/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Cita/';

  constructor(private http : HttpClient) { }

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getCita(id: number): Observable<Cita>{
    return this.http.get<Cita>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addCita(citas :  Cita): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, citas);
  }

  eliminarCita(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarCita(citas :  Cita): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${citas.id}`, citas);
  }
}
