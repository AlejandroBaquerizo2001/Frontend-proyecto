import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/Usuario';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Usuario/';

  constructor(private http : HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addUsuario(usuarios : Usuario): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, usuarios);
  }

  eliminarUsuario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarUsuario(usuarios : Usuario): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${usuarios.id}`, usuarios);
  }
}
