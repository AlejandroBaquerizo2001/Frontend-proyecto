import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctores } from '../../interfaces/Doctor';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Doctor/';

  constructor(private http:HttpClient){

  }

getDoctores(): Observable<Doctores[]>{
  return this.http.get<Doctores[]>(`${this.myAppUrl}${this.myApiUrl}`);
}

addDoctores(doctores : Doctores): Observable<number>{
  return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, doctores);
}
}
