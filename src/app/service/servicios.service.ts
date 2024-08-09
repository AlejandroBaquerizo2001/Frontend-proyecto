import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Servicios } from '../interfaces/Servicios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Servicios/';
  constructor(private http : HttpClient) { }
  getServicios(): Observable<Servicios[]> {
    return this.http.get<Servicios[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
