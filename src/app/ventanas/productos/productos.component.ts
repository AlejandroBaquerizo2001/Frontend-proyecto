import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Productos } from '../../interfaces/Productos';
import { ProductosService } from '../../service/Producto/productos.service';
import { Router } from 'express';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule, HttpClientModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit  {
 id! : number;
  listadoProductos : Productos[]=[];
  dataSource = new MatTableDataSource<Productos>(this.listadoProductos);
  displayedColumns: string[] = ['ID', 'Nombre', 'TipoProducto', 'Cantidad', 'FechaIngreso'];
  longText =`La combinación de amoxicilina y ácido clavulánico se usa para tratar ciertas infecciones causadas por bacterias,
   incluyendo infecciones en los oídos, pulmones, senos, piel y vías urinarias.
  La amoxicilina pertenece a una clase de antibióticos llamados "medicamentos similares" a la penicilina.`;

  longText1 = `Encefabol 600 MD® está indicado para el tratamiento de los síntomas tempranos de involución cerebral,
   como son falta de concentración y de atención, y/o desinterés por el medio
  y en la terapia postraumatismo craneoencefálico.`;

  longText2 = `La terapia antirretroviral (TAR) es el tratamiento de las personas infectadas con el virus de la inmunodeficiencia
  humana (VIH) con fármacos anti-VIH. El tratamiento consiste en una combinación de fármacos
   (comúnmente llamada "terapia antirretroviral de gran actividad" o TARGA) que suprime la replicación del VIH.`;

constructor(private _productosService: ProductosService){}
ngOnInit(): void {
  this.obtenerProductos();
}

obtenerProductos():void{
  this._productosService.getProductos().subscribe({
    next : data => {
      console.log('datos recibidos:',data);
      this.listadoProductos = data;
      this.dataSource.data = data;
    }, error :  error => {
      alert ("ocurrio un error");
    },
    complete : () => {
      console.info('Obtencion de productos completa');
    }
  });
}

}
