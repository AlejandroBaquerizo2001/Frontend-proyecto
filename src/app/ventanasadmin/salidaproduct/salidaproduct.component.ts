import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Salidad } from '../../interfaces/Salida';
import { DatePipe } from '@angular/common';
import { Productos } from '../../interfaces/Productos';

@Component({
  selector: 'app-salidaproduct',
  standalone: true,
  imports: [MatIconModule,
    RouterLink,
    MatInputModule,
    FormsModule,
    DatePipe
  ],
  templateUrl: './salidaproduct.component.html',
  styleUrl: './salidaproduct.component.css'
})
export class SalidaproductComponent {
listSalida : Salidad [] = [];
id! : number;
producto! : string;
tipoProducto! : string;
cantidad! : number;
fechaSalida! : Date;
descripcion! : string;
agregarRegistro(){

}

 eliminarRegistro(){
  const table = document.getElementById("dataTable") as HTMLTableElement;

  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++){
    const cell = rows[i].getElementsByTagName("td") [0];
if (cell && parseInt(cell.innerText) === 1){
  table.deleteRow(i);
  break;
}
  }
}


actualizarRegistro() : void {
  const rowIndexInput = document.getElementById('rowIndex') as HTMLInputElement;
  const codigoInput = document.getElementById('codigo') as HTMLInputElement;
  const nombreInput = document.getElementById('nombre') as HTMLInputElement;
  const tipoproductoInput = document.getElementById('tipoproducto') as HTMLInputElement;
  const cantidadInput = document.getElementById('cantidad') as HTMLInputElement;
  const fechaSalidaInput = document.getElementById('fechaSalida') as HTMLInputElement;
  const descripcionInput = document.getElementById('descripcion') as HTMLInputElement;


  const rowIndex = parseInt(rowIndexInput.value);
  const codigo = parseInt(codigoInput.value);
  const nombre = nombreInput.value;
  const tipoproducto = tipoproductoInput.value;
  const cantidad = parseInt(cantidadInput.value);
  const fechaSalida = fechaSalidaInput.value;
  const descripcion = descripcionInput.value;

  const table = document.getElementById('dataTable') as HTMLTableElement;


  if (rowIndex < 1 || rowIndex >= table.rows.length){
    alert('Indice de fila no valido');
    return;
  }

  table.rows[rowIndex].cells[0].innerText = codigo.toString();
  table.rows[rowIndex].cells[1].innerText = nombre;
  table.rows[rowIndex].cells[2].innerText = tipoproducto;
  table.rows[rowIndex].cells[3].innerText = cantidad.toString();
  table.rows[rowIndex].cells[4].innerText = fechaSalida;
  table.rows[rowIndex].cells[5].innerText = descripcion;
}



consultarRegistro(){
  const table = document.getElementById('dataTable') as HTMLTableElement;
  const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  const datos : {codigo:number, nombre:string, tipoproducto:string, cantidad:number, fechaSalida:Date, descripcion : string}[] = [];

 // for(let row of rows){
   // const cells = row.getElementsByTagName('td');
  //  const codigo = parseInt(cells[0].innerText);
  //  const nombre = cells[1].innerText;
  //  const tipoproducto = cells[2].innerText;
 //   const cantidad = parseInt(cells[3].innerText);
  //  const estado = cells[4].innerText;

  //  datos.push({codigo, nombre, tipoproducto, cantidad, estado});
 // }
  console.log(datos);
}
}
