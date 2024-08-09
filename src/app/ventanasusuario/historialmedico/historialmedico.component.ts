import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Historial } from '../../interfaces/Historial';
import { HistorialService } from '../../service/Historial/historial.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historialmedico',
  standalone: true,
  imports: [MatIconModule,
    RouterLink,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
  MatInputModule,
FormsModule,
CommonModule],
  templateUrl: './historialmedico.component.html',
  styleUrl: './historialmedico.component.css'
})
export class HistorialmedicoComponent {
id! : number;
usuario! : string;
area! : string;
doctor! : string;
estado! : string;
listadoHistorial : Historial [] =[]
form : FormGroup;
constructor(private _historialservice : HistorialService,
  private fb : FormBuilder
){
  this.form = this.fb.group({
    usuario : ['', Validators.required],
    area : ['', Validators.required],
    doctor : ['', Validators.required],
    estado : ['', Validators.required]
  })
}
ngOnInit(): void {
  this.ObtenerHistoriales();
}
AgregarHistorial(){
  const historiales : Historial ={
    usuario : this.usuario,
    area : this.area,
    doctor: this.doctor,
    estado: this.estado
  }
  this._historialservice.addHistorial(historiales).subscribe({
    next : data => {
      console.log(data);
    },
    error : error => {
      alert("ocurrio un error");
    },
    complete : ( )=>{
      console.info('agregar historial completo');
      alert("Agregar historial exitoso");
    }
  });
  this.form.reset();
}
ObtenerHistoriales() : void {
  this._historialservice.getHistoriales().subscribe({
    next : data => {
      console.log(data);
      this.listadoHistorial = data;
    },
    error : error => {
      alert("Ocurrio un error");
    },
    complete : () => {
      console.info('Obtencion exitosa');
    }
  });
}
  eliminarHistorialMedico(id? : number) : void{
if (id == undefined){
  alert('el id es indefinido');
  return ;
}
this._historialservice.eliminarHistorial(id).subscribe({
  next : data => {
    console.log('Historial eliminado',data);
    this.ObtenerHistoriales();
  },
  error : error => {
    alert ("Ocurrio un error");
  },
  complete : () => {
    console.info('eliminacion compeltada');
    alert ("Eliminacion exitosa");
  }
});
  }

  consultarHistorialMedico() :  void {
if (this.id){
  this._historialservice.getHistorial(this.id).subscribe({
    next : (data) =>{
      console.log(data);
      this.form.patchValue({
        usuario : data.usuario,
        area: data.area,
        doctor : data.doctor,
        estado : data.estado,
      });
    },
    error : (err)=> {
      console.error('Error al consultar dicho inventario');
    },
  });
}else {
  console.warn('Id no definido asegurate de definirlo');
}
  }



}
