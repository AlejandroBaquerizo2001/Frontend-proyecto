import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historial } from '../../interfaces/Historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Historial/';

  constructor(private http : HttpClient) { }

  getHistoriales(): Observable<Historial[]> {
    return this.http.get<Historial[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getHistorial(id: number): Observable<Historial>{
    return this.http.get<Historial>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addHistorial(historiales : Historial): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, historiales);
  }

  eliminarHistorial(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarHistorial(historiales : Historial): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${historiales.id}`, historiales);
  }
}
