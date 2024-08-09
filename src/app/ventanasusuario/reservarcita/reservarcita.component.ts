import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Cita } from '../../interfaces/Cita';
import { CitaService } from '../../service/Cita/cita.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservarcita',
  standalone: true,
  imports: [MatIconModule,
    RouterLink,
    MatInputModule,
    FormsModule, CommonModule
  ],
  templateUrl: './reservarcita.component.html',
  styleUrl: './reservarcita.component.css'
})
export class ReservarcitaComponent {
  id! : number;
  usuario! : string;
doctor! : string;
especialidad! : string;
fechaCita!: Date;
  citas: Cita[] = [];
form : FormGroup;
  constructor(private citaService: CitaService,
    private fb : FormBuilder
  ) {
    this.form = this.fb.group({
     usuario : ['', Validators.required],
     doctor :['', Validators.required],
     especialidad : ['', Validators.required],
     fechaCita : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.cargarCitas();
  }
  AgregarCita(){
    const cita : Cita ={
      usuario : this.usuario,
      doctor : this.doctor,
      especialidad : this.especialidad,
      fechaCita : this.fechaCita
    }
    this.citaService.addCita(cita).subscribe({
      next : data =>{
        console.log(data);
      },
      error : error =>{
        alert("error");
      },
      complete : () =>{
        console.info('agregacion de cita');
        alert("Agregado exitoso");
      }
    });
    this.form.reset();
  }

  cargarCitas(): void {
    this.citaService.getCitas().subscribe({
      next : data =>{
        console.log(data);
        this.citas = data;
      },
      error : error => {
        alert("Ocurrio un error");
      },
      complete : () => {
        console.info('Obtencion exitosa');
      }
    });
  }

 eliminarCita(id? : number) : void{
  if (id == undefined){
    alert('el id es indefinido');
    return;
  }
  this.citaService.eliminarCita(id).subscribe({
    next : data => {
      console.log(data);
      this.cargarCitas();
    },
    error : error => {
      alert ("Ocurrio un error");
    },
    complete : () =>{
      console.info('eliminacion completada')
      alert ("Eliminacion completa");
    }
  });
 }

 actualizarCita(id?: number): void {
  if (id === undefined) {
    console.warn('Id no válido');
    return;
  }

  // Obtén los valores del formulario
  const cita: Cita = {
    id: id,
    usuario: this.form.get('usuario')?.value,
    doctor: this.form.get('doctor')?.value,
    especialidad: this.form.get('especialidad')?.value,
    fechaCita: this.form.get('fechaCita')?.value,
  };

  this.citaService.modificarCita(cita).subscribe({
    next: data => {
      console.log('Actualización exitosa', data);
      this.cargarCitas();
    },
    error: (error) => {
      console.error('Error al actualizar', error);
      alert("Ocurrió un error al actualizar la cita");
    },
    complete: () => {
      console.info('Modificación exitosa');
      alert("Actualización exitosa");
    }
  });

  this.form.reset();
}

}
