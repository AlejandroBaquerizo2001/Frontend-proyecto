import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Productos } from '../../interfaces/Productos';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
private myAppUrl : string = environment.endpoint;
private myApiUrl : string = 'api/Producto/';
  constructor(private http: HttpClient) { }
  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  getProducto(id: number): Observable<Productos>{
    return this.http.get<Productos>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addProductos(productos : Productos): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`,productos);
  }

  eliminarProductos(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarProductos(productos : Productos): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${productos.id}`,productos);
  }
}
