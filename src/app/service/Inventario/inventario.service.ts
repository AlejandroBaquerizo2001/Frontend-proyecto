import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from '../../interfaces/Inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Inventario/';

  constructor(private http : HttpClient) { }

  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getInventario(id: number): Observable<Inventario>{
    return this.http.get<Inventario>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addInventario(inventarios : Inventario): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, inventarios);
  }

  eliminarInventario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarInventario(inventarios : Inventario): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${inventarios.id}`, inventarios);
  }
}
