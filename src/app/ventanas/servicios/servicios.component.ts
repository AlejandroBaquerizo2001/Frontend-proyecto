import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Servicios } from '../../interfaces/Servicios';
import { ServiciosService } from '../../service/servicios.service';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
     MatSortModule,
     MatPaginatorModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
listadoServicios : Servicios [] =[];
id! : number;
nombre! : string;
area! : string;
oferta! : string;
valor! : number;
longText =``;

longText1 = ``;

longText2 = ``;
constructor(private _serviciosService : ServiciosService){}
ngOnInit(): void {
this.ObtenerServicio();
}

ObtenerServicio(): void {
  this._serviciosService.getServicios().subscribe({
next : data => {
  console.log('datos recibidos: ', data);
  this.listadoServicios = data;
},
error : error => {
  alert("Ocurrio un error");
},
complete : () => {
  console.info('Obtencion de servicios ');
}
  });
}
}
