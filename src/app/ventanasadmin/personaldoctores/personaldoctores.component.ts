import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Doctores } from '../../interfaces/Doctor';
import { DoctoresService } from '../../service/Doctor/doctores.service';

@Component({
  selector: 'app-personaldoctores',
  standalone: true,
  imports: [MatIconModule,
    RouterLink,
    MatInputModule,
    FormsModule,
    DatePipe, RouterModule
  ],
  templateUrl: './personaldoctores.component.html',
  styleUrl: './personaldoctores.component.css'
})
export class PersonaldoctoresComponent {
  listaDoctores : Doctores[] = [];
id! : number;
nombre!: string;
especialidad! : string;
area !: string;
fechaIngreso! : Date;
  form: FormGroup;


  constructor (private _doctoresService : DoctoresService,
    private router : Router,
    private fb: FormBuilder){
this.form = this.fb.group({
  nombre : ['', Validators.required],
  especialidad : ['', Validators.required],
  area : ['', Validators.required],
  fechaIngreso : ['', Validators.required]
})
  }
agregarDoctor(){
const doctores : Doctores = {
  nombre : this.nombre,
  especialidad : this.especialidad,
  area : this.area,
  fechaIngreso : this.fechaIngreso
}

this._doctoresService.addDoctores(doctores).subscribe({
next : data => {
  console.log(data);
},
error : error => {
  alert("error al ingresar datos");
},
complete: () => {
  console.info("datos ingresados correctamente");
  alert("Se ingreso completo los datos");
}
});
this.form.reset();
}

 eliminarDoctor(){
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


actualizarDoctor() : void {
  const rowIndexInput = document.getElementById('rowIndex') as HTMLInputElement;
  const codigoInput = document.getElementById('codigo') as HTMLInputElement;
  const nombreInput = document.getElementById('nombre') as HTMLInputElement;
  const especialidadInput = document.getElementById('especialidad') as HTMLInputElement;
  const areaInput = document.getElementById('area') as HTMLInputElement;
  const fechaIngresoInput = document.getElementById('fechaIngreso') as HTMLInputElement;


  const rowIndex = parseInt(rowIndexInput.value);
  const codigo = parseInt(codigoInput.value);
  const nombre = nombreInput.value;
  const especialidad = especialidadInput.value;
  const area = areaInput.value;
  const fechaIngreso = fechaIngresoInput.value;

  const table = document.getElementById('dataTable') as HTMLTableElement;


  if (rowIndex < 1 || rowIndex >= table.rows.length){
    alert('Indice de fila no valido');
    return;
  }

  table.rows[rowIndex].cells[0].innerText = codigo.toString();
  table.rows[rowIndex].cells[1].innerText = nombre;
  table.rows[rowIndex].cells[2].innerText = especialidad;
  table.rows[rowIndex].cells[3].innerText = area;
  table.rows[rowIndex].cells[4].innerText = fechaIngreso;
}



consultarDoctor(){
  const table = document.getElementById('dataTable') as HTMLTableElement;
  const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  const datos : {codigo:number, nombre:string, especialidad : string, area : string, fechaIngreso: Date}[] = [];

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
